import fetchDataForProps from '../utils/fetchDataForProps.js'
import ArticlePreview from '../components/ArticlePreview.js'
import Head from 'next/head.js'
import styles from "../styles/unclog/Unclog.module.css"
import styles2 from "../styles/Human-Writes.module.css"
import { useEffect, useState } from 'react'

export async function getStaticProps(){
    const data = await fetchDataForProps("articles?populate=*")
    const test = await fetch("http://localhost:1337/api/category-preview-images?populate=*")
    const json = await test.json()
    const categories = await fetchDataForProps("categories?populate=*")

  return {props: {articles: data, images: json, categories: categories}}
}

export function Category({title, imgUrl, fun, count}){
    let text ="";
    if(count == 1){
        text = "Post"
    }else{
        text = "Posts"
    }
    return(
        <div className={styles2.category_card} onClick={()=>fun(title)}>
            <h2>{title}</h2>
            <img src={`http://localhost:1337${imgUrl}`} className={styles2.category_image}></img>
            <p>{count} {text}</p>
        </div>
    )
}

function getImageUrls(data){
    let arr =[]
    data.data.map(obj=>{
        arr.push(obj.attributes.image.data.attributes.url)
    })
    return arr
}

export default function Writing({articles, images, categories}){
    const urls = getImageUrls(images)
    const [posts, setPosts] = useState([])
    const [artPosts, setArtPosts] = useState([])
    const [photoPosts, setPhotoPosts] = useState([])
    const [philPosts, setPhilPosts] = useState([])
    const [textPosts, setTextPosts] = useState([])
    const [nmaPosts, setNmaPosts] = useState([])
    
    let artArr = []
    let photoArr = []
    let philArr = []
    let textArr = []
    let nmaArr = []

    articles.map(post=>{
        post.categories.data.map(category=>{
            switch(category.attributes.category){
                case "Art":
                artArr.push(post);
                break;
                case "Photography":
                photoArr.push(post);
                break;
                case "Philosophy":
                philArr.push(post)
                break;
                case "Creative Writing":
                textArr.push(post)
                break;
                case "Non Martial Arts":
                nmaArr.push(post)
            }
        })
    })
    
    useEffect(()=>{
        setArtPosts(artArr)
        setPhotoPosts(photoArr)
        setPhilPosts(philArr)
        setTextPosts(textArr)
        setNmaPosts(nmaArr)
    }, [])

    function FilterCategories(category){
        switch(category){
            case "Art":
            setPosts(artPosts);
            break;
            case "Photography":
            setPosts(photoPosts);
            break;
            case "Philosophy":
            setPosts(philPosts);
            break;
            case "Creative Writing":
            setPosts(textPosts);
            break;
            case "Non Martial Arts":
            setPosts(nmaPosts);
        }
    }

    console.log(categories)
    return(
        <>
            <Head>
                <title>Human Writes</title>
                <meta name="description" content="Eightyeightdays" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <h1>Human Writes</h1>

            <div className={styles2.category_container}>
                <p>Select a category</p>
                <div className={styles2.category}>
                    {categories.map((item, index) =>(
                        <Category key={index} title={item.category} imgUrl={urls[index]} fun={FilterCategories} count={item.articles.data.length}/>
                    ))}
                </div>
            </div>
            
            <div className={styles2.posts_container}>
                {posts && posts.map((obj, index) => (
                    <ArticlePreview data={obj} key={index} />
                ))}
            </div>
        </>
    )
}
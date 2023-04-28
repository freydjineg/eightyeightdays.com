import styles from "../styles/VisualCategoryCard.module.css";

export default function VisualCategoryCard({setCategory, categoryData, url, alt, title, description}){
    function handleClick(){
        setCategory(categoryData);
        setTimeout(()=>{
            document.getElementById("previewContainer").scrollIntoView({block:"end", behavior:"smooth"})
        }, 100);
    }
    return(
        <div className={styles.category_card} onClick={handleClick}>
            <img src={`http://localhost:1337${url}`} alt={alt} className={styles.category_card_img} />
            <div className={styles.category_card_title}>{title}</div>
            <div className={styles.category_card_description}>{description}</div>
        </div>
    )
}
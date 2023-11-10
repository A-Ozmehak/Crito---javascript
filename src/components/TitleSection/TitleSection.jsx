import backgroundLines from '../../assets/background-lines-showcase.png';

const TitleSection = ({ title }) => {
  return (
    <section className="title-section">
    <div className="lines">
        <img src={backgroundLines} alt="lines in the background" />
    </div>
    <div className="container">
        <div className="breadcrumbs">
            <p>Home</p>
            <p>News</p>
        </div>
        <h1>{title}</h1>
    </div>
</section>
  )
}

export default TitleSection;
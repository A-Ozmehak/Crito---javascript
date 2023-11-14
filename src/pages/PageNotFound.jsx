import sad from '../assets/404.png'

const PageNotFound = () => {

    return (
      <div className="container not-found-container">
        <img src={sad} alt="404" />
        <h1>404</h1>
        <h4>THE PAGE YOUR LOOKING FOR DOESN'T SEEM TO EXIST</h4>
      </div>
    )
}

export default PageNotFound;
import { Loader } from "../components"

const HomePage = () => {

    return (
        <div className="page home">
            <div className="home-head">
                <h1>Hello and Welcome to my AI App!</h1>
                <h3>Here you can talk to an AI as well as find and generate AI images</h3>
            </div>
            <div className="home-body">
                <div className="body-left"></div>
                <div className="body-right"></div>
            </div>
            <div className="home-footer">
                <div className="color-break"></div>
                <div className="contacts"></div>
            </div>
        </div>
    )
}

export default HomePage
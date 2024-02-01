import NavBar from "../../components/Navbar/NavBar";
import '@splidejs/splide/dist/css/themes/splide-default.min.css';


function Home() {

    return (
        <>
            <div className="home-content">
                <div className="black"></div>
                <div className="main-content">
                    <NavBar/>
                    <h2 className="text-light text-center mt-5">"Me gusta comer, yo puedo cocinar"</h2>
                </div>
            </div>

        </>
    )
}

export default Home
import Hero from "../components/Hero";
import Navbar from "../components/navbar"
import HomeTitle from "../components/homeTitle"

function Home() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                img="https://images.unsplash.com/photo-1523960988700-e337e9d64131?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="193 leaders committed to end poverty, inequality, climate change by 2030.."
                text="Let’s fight for a better future, inch by inch...."
                url="https://www.globalgoals.org/halftime/"
                buttonClass="show"
                buttonName="JOIN THE FIGHT"
            />
            <HomeTitle />
        </>
    )
}

export default Home;
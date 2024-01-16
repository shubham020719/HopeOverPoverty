import Hero from "../components/Hero";
import Navbar from "../components/navbar"

function Action() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                img="https://img.freepik.com/free-photo/man-jump-through-gaps-hills_1150-19693.jpg?w=996&t=st=1704375833~exp=1704376433~hmac=7da9d278b9c068200d138ce48f5231c94d359782ba2aa71f669e91a12cb32391"
                title="TAKE ACTION TODAY."
                text="What action will you take today? For each of the 17 Goals there are many positive actions you can take to make a real change....."
                url="https://www.globalgoals.org/halftime/"
                buttonClass="show"
                buttonName="JOIN THE FIGHT"
            />
        </>
    )
}

export default Action;
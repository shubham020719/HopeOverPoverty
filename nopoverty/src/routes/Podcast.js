import Hero from "../components/Hero";
import Footer from "../components/footer";
import Navbar from "../components/navbar"
import Youtube from "../components/youtube";

function Podcast() {
    return (
        <>
            
            <Navbar />
            <Hero
                cName="hero"
                img="https://img.freepik.com/free-photo/hand-holding-headphones-with-copy-space_23-2148775846.jpg?w=1380&t=st=1704376456~exp=1704377056~hmac=5171f66241d3a69b6d60af7972f70f6d6b59fbe7ace81a5ca25522eb4d27f2b2"
                title="AN IDIOT’S GUIDE TO SAVING THE WORLD"
                text="Each episode we’ll go behind one of the Global Goals and zoom in on three stories; who is affected?"
                url="https://www.globalgoals.org/halftime/"
                buttonClass="show"
                buttonName="JOIN THE FIGHT"
            />
    <br></br>
            <div className="podcast">
                <Youtube
                    title= "Episode 1–Are we consuming too much?"
                    text= "In this first episode of the new season, Gail Gallie and Loyiso Madinga look at Global Goal 12 and ask what it means to consume “responsibly”. They speak with Johan Rockström, one of the foremost experts on sustainable consumption and production systems. They are also joined by changemaker Melati Wijsen, who together with her sister at ages 12 and 10, successfully banned plastic bags in their home country Bali."
                    url= "https://www.youtube.com/embed/NISsADul_Fo"
                />
                <Youtube
                    title="Episode 2 – Can These Technologies Save The Day?"
                    text="In this episode Gail and Loyiso look at the Global Goals to achieve gender equality (Goal 5) and are joined by three storytellers. Author and podcaster Janet Mbugua explains why we need to talk about periods, journalist Zahra Joya ensures Afghan women’s stories don’t go untold, and activist Gina Martin engages boys into the conversation about gender."
                    url="https://www.youtube.com/embed/_IqWwbqEPZY?si=YYnHaPIE4QNlORhJ"
                />
                <Youtube
                    title="Episode 3 – Why Women Are Reclaiming the Narrative"
                    text="In this episode Gail and Loyiso look at the Global Goals to achieve gender equality (Goal 5) and are joined by three storytellers. Author and podcaster Janet Mbugua explains why we need to talk about periods, journalist Zahra Joya ensures Afghan women’s stories don’t go untold, and activist Gina Martin engages boys into the conversation about gender."
                    url="https://www.youtube.com/embed/wDuxRAq9uiQ?si=NVcG9R0ZVx03LxDS"
                />
                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/3ETHZ9YpGuY?si=bYcyQfSoqjuC9vEl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

                <Youtube
                    title="Episode 4 – Accessibility should be a right not a privilege"
                    text="In this episode Gail and Loyiso explore the Global Goal to reduce inequality (Goal 5) and are joined by famous youtuber Molly Burke, who happens to be blind and has a load of helpful tips for designing better accessibility offline and online. And architect turned big thinker Indy Johar calls for a fundamental overhaul of an old system that perpetuates inequalities in all its forms.

Guests:Molly Burke, Speaker, Digital Creator, Author, and Advocate. Indy Johar, Architect, co-founder of project00 and Dark Matter Labs."
                    url="https://www.youtube.com/embed/YrcLfPHqWO4?si=GWojjGhVtyT2USEx"
                />
                <Youtube
                    title="Episode 5 – Why mental health matters"
                    text="The pandemic severely disrupted health services and derailed progress towards ending HIV, tuberculosis and malaria. It also triggered an increase in the prevalence of anxiety and depression, contributing to an already growing mental health crisis. 1 in 5 adults experience mental illness every year, and nearly half of all adults will experience it at some point in their lives."
                    url="https://www.youtube.com/embed/zkPuFdO2vSI?si=zw0R9veGmxu6n16R"
                />
                <Youtube
                    title="Episode 6 – Nurturing Nature"
                    text="Protecting life on land means protecting ourselves. Natural ecosystems are the best technology to help feed populations, cool the planet, provide fresh water and clean the air we breathe. But our biodiversity is under severe threat. Globally, over 1.2 million plant and animal species are predicted to face extinction in the coming decades. Experts now believe we’re in the midst of a ‘sixth mass extinction’,  the first in Earth’s history to be driven primarily by human activity."
                    url="https://www.youtube.com/embed/LKbAysTkODM?si=jhuqtSdmdNRPNE5Q"
                />
                <Youtube
                    title="Episode 7 – We Need To Talk About Money"
                    text="The fight to eradicate extreme poverty has been fought for years. But despite this, over 700 million people still survive on less than $2.15 a day.

So is it time we talk about cash? In this episode Gail and Loyiso dive deep into the Global Goal to end poverty (Goal 1). They are joined by two of the most exciting speakers in this field. Rory Stewart is the President of GiveDirectly, a fast growing nonprofit that is revolutionising the aid sector by allowing donors to send money directly to those in need, with no strings attached."
                    url="https://www.youtube.com/embed/YKXYYajByBc?si=eRvFqzz9dykX1zJm"
                />
                <Youtube
                    title="Episode 8 – Let’s come together so we don’t fall apart"
                    text="In the final episode of this season, Gail and Loyiso look at Goal 17, partnerships for the goals. They ask what the ingredients are of a good partnership and find out which sectors are working together to make a positive impact.

They are joined by two SDG ambassadors who have been campaigning for the Goals since their inception. Dr Alaa Murabit and filmmaker Richard Curtis bring their wealth of experience to the table and share some encouraging examples of successful collaborations."
                    url="https://www.youtube.com/embed/I5O5IHYc7Dk?si=Txo0DRaPdDKzHXxp"
                />
            </div>
            <br></br>
            <Footer/>

        </>
    )
}

export default Podcast;
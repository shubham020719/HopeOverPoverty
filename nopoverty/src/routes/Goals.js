import EachGoals from "../components/EachGoals";
import Hero from "../components/Hero";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "./goal.css"


function Goal() {
    return (
        <>

            <Navbar />
            <Hero
                cName="hero"
                img="https://images.unsplash.com/photo-1600926401860-65bb16f72390?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="THE 17 GOALS."
                text="We all know that we face big challenges in today’s world: poverty, hunger, inequality and climate change are just some of the issues we need to address urgently....."
                url="https://www.globalgoals.org/halftime/"
                buttonClass="show"
                buttonName="JOIN THE FIGHT"
            />
            <div className="goalDiv">
                <div className="EachGoalDiv">
                    <a href="https://www.globalgoals.org/goals/1-no-poverty/">
                        <EachGoals
                            imgUrl="https://www.fairplanet.support/wp-content/uploads/2020/04/sustainable-development-goal-1-no-poverty.1676558077.svg"
                            title="1. NO POVERTY"
                        />
                    </a>
                    <a href="https://www.globalgoals.org/goals/2-zero-hunger/">
                        <EachGoals
                            imgUrl="https://www.fairplanet.support/wp-content/uploads/2020/04/sustainable-development-goal-2-zero-hunger.1676558077.svg"
                            title="2. Zero Hunger"
                        />
                    </a>
                    <a href="https://www.globalgoals.org/goals/3-good-health-and-well-being/">
                        <EachGoals
                            imgUrl="https://www.fairplanet.support/wp-content/uploads/2020/04/sustainable-development-goal-3-good-health-and-well-being.1676558077.svg"
                            title="3. Good Health and Well-being"
                        />
                    </a>
                    <a href="https://www.globalgoals.org/goals/4-quality-education/">
                        <EachGoals
                            imgUrl="https://www.fairplanet.support/wp-content/uploads/2020/04/sustainable-development-goal-4-quality-education.1676558077.svg"
                            title="4. Quality Education"
                        />
                    </a>
                    <a href="https://www.globalgoals.org/goals/5-gender-equality/">
                        <EachGoals
                            imgUrl="https://www.fairplanet.support/wp-content/uploads/2020/04/sustainable-development-goal-5-gender-equality.1676558077.svg"
                            title="5. Gender Equality"
                        />
                    </a>
                    <EachGoals
                        imgUrl="https://www.fairplanet.support/wp-content/uploads/2020/04/sustainable-development-goal-6-clean-water-and-sanitation.1676558077.svg"
                        title="6. Clean Water and Sanitation"
                    />
                    <EachGoals
                        imgUrl="https://www.fairplanet.support/wp-content/uploads/2020/04/sustainable-development-goal-7-affordable-and-clean-energy.1676558077.svg"
                        title="7. Affordable and Clean Energy"
                    />
                    <EachGoals
                        imgUrl="https://www.fairplanet.support/wp-content/uploads/2020/04/sustainable-development-goal-8-decent-work-and-economic-growth.1676558077.svg"
                        title="8. Decent Work and Economic Growth"
                    />
                    <EachGoals
                        imgUrl="https://www.fairplanet.support/wp-content/uploads/2020/04/sustainable-development-goal-9-industry-innovation-and-infrastructure.1676558077.svg"
                        title="9. Industry, Innovation and Infrastructure"
                    />
                    <EachGoals
                        imgUrl="https://www.fairplanet.support/wp-content/uploads/2020/04/sustainable-development-goal-10-reduced-inequality.1676558077.svg"
                        title="10. Reduced Inequality"
                    />
                    <EachGoals
                        imgUrl="https://www.fairplanet.support/wp-content/uploads/2020/04/sustainable-development-goal-11-sustainable-cities-and-communities.1676558077.svg"
                        title="11. Sustainable Cities and Communities"
                    />
                    <EachGoals
                        imgUrl="https://www.fairplanet.support/wp-content/uploads/2020/04/sustainable-development-goal-12-responsible-consumption-and-production.1676558077.svg"
                        title="12. Responsible Consumption and Production"
                    />
                    <EachGoals
                        imgUrl="https://www.fairplanet.support/wp-content/uploads/2020/04/sustainable-development-goal-13-climate-action.1676558077.svg"
                        title="13. Climate Action"
                    />
                    <EachGoals
                        imgUrl="https://www.fairplanet.support/wp-content/uploads/2020/04/sustainable-development-goal-14-life-below-water.1676558077.svg"
                        title="14. Life Below Water"
                    />
                    <EachGoals
                        imgUrl="https://www.fairplanet.support/wp-content/uploads/2020/04/sustainable-development-goal-15-life-on-land.1676558077.svg"
                        title="15. Life on Land"
                    />
                    <EachGoals
                        imgUrl="https://www.fairplanet.support/wp-content/uploads/2020/04/sustainable-development-goal-16-peace-justice-and-strong-institutions.1676558077.svg"
                        title="16. Peace, Justice and Strong Institutions"
                    />
                    <EachGoals
                        imgUrl="https://www.fairplanet.support/wp-content/uploads/2020/04/sustainable-development-goal-17-partnerships-for-the-goals.1676558077.svg"
                        title="17. Partnerships for the Goals"
                    />
                </div>
                <div className="goalImg">
                    <img alt="goalImg" src="https://img.freepik.com/premium-vector/homeless-man-asking-help-semi-flat-rgb-color-vector-illustration-standing-figure-begging-money-poor-person-without-home-money-isolated-cartoon-character-white-background_106317-17335.jpg?w=360" />
                    <img alt="goalImg" src="https://images.unsplash.com/photo-1604918477251-75e 773547ced?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <img alt="goalImg" src="https://img.freepik.com/free-photo/female-volunteer-holding-box-donations_23-2147807294.jpg?w=360&t=st=1704450031~exp=1704450631~hmac=bf96a413957630c0637ed6ed83097b5afffd174b3d080de41f62f9afd9ed96b0" /><img alt="goalImg" src="https://img.freepik.com/free-photo/full-shot-man-sitting-outdoors_23-2148774001.jpg?w=360&t=st=1704450071~exp=1704450671~hmac=cb870b70b3b590ab22bf60cc6233ff93e7ca284917f0a008c46f19fb0c6dbf7f" />
                    <img alt="goalImg" src="https://img.freepik.com/free-photo/homeless-standing-near-building_1157-45311.jpg?size=626&ext=jpg&ga=GA1.1.2141891564.1696667443&semt=ais" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Goal;
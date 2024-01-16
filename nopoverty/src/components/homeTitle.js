import Footer from "./footer";
import "./homeTitle.css"
import LitleData from "./litleDiv";
import NewsData from "./news";
// import "./homeTitle2.css"
import TitleData from "./titleData";
import TitleData2 from "./titleData2";

const HomeTitle = () => {
    return (
        <div className="hometitle">
            <h1>THE GLOBAL GOALS</h1>
            <TitleData
                heading="IN 2015, WORLD LEADERS AGREED TO 17 GLOBAL GOALS."
                text="We’re at halftime and only 15% of the #GlobalGoals are on track. COVID-19, the cost of living, conflict, the climate crisis – such as floods, heatwaves, wildfires – have set us back, but hope remains. We’re joining the United Nations for the critical SDG Halftime Campaign this year, because any match is won in the second half. Let’s regroup, re-energize and win together."
                img1="https://img.freepik.com/free-photo/close-up-people-connecting-through-hands_23-2149125883.jpg?w=360&t=st=1704379225~exp=1704379825~hmac=0e3fef1f4dd2e6ccb224270165ff602f026b4623f167803fd644b453136b46c9"
                img2="https://img.freepik.com/free-photo/team-sitting-desk-checking-reports-talking-connecting-hands-together-top-view-business-concept-collaboration-team-work-meeting_155003-32358.jpg?w=360&t=st=1704379284~exp=1704379884~hmac=e4f16801c5069dac80e4476dab3316668a9176209aff2f555ef6a8e9d5f7e88e"

            />
            <br></br>
            <hr></hr>
            <TitleData2
                heading="COME TOGETHER TO ACHIEVE THE GLOBAL GOALS."
                text="Progress for the Global Goals has stalled and even reversed. We need to reflect on our achievements, learn from our setbacks and come up with new tactics to ensure the Goals are achieved. That’s why we’re excited to be joining the United Nations for the critical SDG Halftime Campaign this September. #ImagineWinning #GlobalGoals"
                img1="https://img.freepik.com/free-photo/paper-style-earth-globe-with-silhouettes_23-2149377737.jpg?w=360&t=st=1704381227~exp=1704381827~hmac=22cd8ca0c4f19d6cc8bc9d993e7a9dc09d07272c914891e4520018de60e669ae"
                img2="https://img.freepik.com/free-photo/business-planning-concept-with-dartboard-wooden-cubes-wooden-table-side-view_176474-9367.jpg?w=360&t=st=1704381246~exp=1704381846~hmac=d2827c6564c19e322dd6d1f970ba65dee282a77349a7d48f558e4319e7d3835e"

            />
            <br></br>
            <br></br>
            <hr></hr>
            {/* <br></br> */}
            <div className="litleData">
                <div>
                    <LitleData
                        head="SCHOOLS"
                        Text="Discover the World’s Largest Lesson, an educational platform which promotes the use of the Goals in learning. There are thought-provoking lesson plans and activities and resources for teachers/children to use, all designed to motivate and inspire young people to become informed and active citizens, and build the world they want to grow up in."
                    />
                </div>

                <div>
                    <LitleData
                        head="BUSSINESS"
                        Text="Whether you’re a business or employee, at the start of your sustainability journey or developing your next set of commitments, we’ve got useful resources to support your contribution to the Global Goals.."
                    />
                </div>

            </div>
            <br></br>
            <hr></hr>
            <br></br>

            <img className="child" alt="child" src="https://globalgoalscms.co.uk/wp-content/uploads/2023/09/Picture6-2-scaled-1.jpg" />
            <h2> <u>WHAT'S HAPPENING</u> </h2>
            {/* <div className="off"> */}
             <div className="News-data">
                <div>
                    <NewsData
                        img="https://img.freepik.com/free-photo/front-view-homeless-man-holding-help-sign-plastic-bag_23-2148760776.jpg?w=996&t=st=1704396514~exp=1704397114~hmac=05faf0a6132dda9c7a2348118b0f8632d5d6c0a7dbcf05aca69d6648a23b39fb"
                        date="December 14, 2023"
                        head="2023: A YEAR IN REVIEW FOR THE GLOBAL GOALS"
                        text="2023 has been a significant year for the Global Goals. We reached halftime and we are way down, with only 15% of the goals on track. This year, we have…"
                    />
                </div>
                <div>
                    <NewsData
                        img="https://img.freepik.com/free-photo/person-protesting-with-placard-world-environment-day-outdoors_23-2149571878.jpg?w=360&t=st=1704396773~exp=1704397373~hmac=ce7d24b06dbc941910dd715293672d6163ae8e02fa82ba6fa94163f1e1d4fe27"
                        date="november 14, 2022"
                        head="SUSTAINABILITY HOUR: A NEW VOLUNTEERING INITIATIVE INSPIRES THE NEXT GENERATION TO CREATE A BRIGHTER FUTURE "
                        text="Whether it’s fighting climate change, advocating for gender equality, or ending poverty – the next generation must be equipped to face the world’s challenges head-on. Sustainability Hour, a volunteering opportunity…"
                    />
                </div>
                <div>
                    <NewsData
                        img="https://img.freepik.com/premium-photo/full-length-man-sitting-outdoors_1048944-27680852.jpg?w=360"
                        date="September 13, 2023"
                        head="LIFE IS A GAME OF INCHES – AND EVERY ACTION COUNTS"
                        text="At the halfway point to the 2030 deadline of the Global Goals – we’re down at halftime. The upcoming UN General Assembly is a critical moment for action. With only…"
                    />
                </div>

            </div>
            {/* </div> */}
           
            <Footer />
        </div>
        
    );
};

export default HomeTitle;
import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/navbar"
import "./newscard.css"
import NewsCard from "./newsCard";


function News() {
    const url = "https://newsapi.org/v2/everything?q=poverty&from=2024-01-13&to=2024-01-13&sortBy=popularity&apiKey=5524992521e9422a8ed92cfa6b692631";
    const [data, setData] = useState([]);

    const fetchInfo = () => {
        return fetch(url)
            .then((res) => res.json())
            .then((d) => setData(d))
    }


    useEffect(() => {
        fetchInfo();
    }, []);
    let news = data.articles
    console.log(news);
        return (
            <>

                <Navbar />
                <Hero
                    cName="hero"
                    img="https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="NEWS."
                    text="Newsletter and hear about the big ideas and new campaigns, taking place all around the world...."
                    url="https://www.globalgoals.org/halftime/"
                    buttonClass="show"
                    buttonName="JOIN THE FIGHT"
                />
                <div className="cardsDiv">
                    <>
                    
                    
                    {news &&news.map((NewsData, index) => {
                        return (
                            <>
                            
                            
                            <NewsCard
                                title={NewsData.content}
                                text={NewsData.description}
                                img={NewsData.urlToImage}
                                id={NewsData.id}
                                    date={NewsData.publishedAt}
                                    url={NewsData.url}
                            />
                                
                                </>
                        )
                    })}

                    </>
                </div>


            </>
        )
    }


export default News;
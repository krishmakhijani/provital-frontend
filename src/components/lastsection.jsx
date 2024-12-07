import { useRef, useEffect, useState, useCallback } from 'react';
import "../styles/last.scss";

function LastSection() {
    const cardsContainerRef = useRef(null);
    const [isScrolling, setIsScrolling] = useState(false);
    const [scrollDirection, setScrollDirection] = useState(null);
    const cardWidth = 493;
    const gap = 24;
    const scrollAmount = cardWidth + gap;

    const handleScroll = useCallback((direction) => {
        const container = cardsContainerRef.current;

        if (container) {
            const maxScrollLeft = container.scrollWidth - container.clientWidth;

            if (direction === 'right') {
                if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
                    container.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    container.scrollTo({ left: container.scrollLeft + scrollAmount, behavior: 'smooth' });
                }
            } else if (direction === 'left') {
                if (container.scrollLeft === 0) {
                    container.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
                } else {
                    container.scrollTo({ left: container.scrollLeft - scrollAmount, behavior: 'smooth' });
                }
            }
        }
    }, [scrollAmount]);

    const startScrolling = (direction) => {
        setScrollDirection(direction);
        setIsScrolling(true);
    };

    const stopScrolling = () => {
        setIsScrolling(false);
        setScrollDirection(null);
    };

    useEffect(() => {
        let scrollInterval;

        if (isScrolling && scrollDirection) {
            scrollInterval = setInterval(() => {
                handleScroll(scrollDirection);
            }, 500);
        }

        return () => {
            if (scrollInterval) {
                clearInterval(scrollInterval);
            }
        };
    }, [isScrolling, scrollDirection, handleScroll]);

    const cardsData = [
        {
            image: "/card1.png",
            logo: "/card1_logo.svg",
            logoNumber: "121/80",
            logoFormat: "mmHg",
            title: "Nutrition",
            description: "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness."
        },
        {
            image: "/card2.png",
            logo: "/card2_logo.svg",
            logoNumber: "32",
            logoFormat: "minutes",
            title: "Physical activity",
            description: "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease."
        },
        {
            image: "/card3.png",
            logo: "/card3_logo.svg",
            logoNumber: "8",
            logoFormat: "hours",
            title: "Restorative sleep",
            description: "Consistent, quality sleep is essential for cognitive function and physical health."
        },
        {
            image: "/card4.png",
            logo: "/card4_logo.svg",
            logoNumber: "60",
            logoFormat: "bpm",
            title: "Stress management",
            description: "Effective stress management techniques are crucial for mental well-being and overall health."
        },
        {
            image: "/card5.png",
            logo: "/card5_logo.svg",
            logoNumber: "Feeling",
            logoFormat: "better",
            title: "Social connection",
            description: "Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health."
        },
        {
            image: "/card6.png",
            logo: "/card6_logo.svg",
            logoNumber: "62",
            logoFormat: "days",
            title: "Substance abuse",
            description: "Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health."
        }
    ];

    return (
        <div>
            <div className="frame-class">
                <img src="/frame.png" alt="frame"/>
            </div>
            <div className="main-sec">
                <div className="option-text">
                    HOW IT WORKS
                </div>
                <div className="header-box">
                    <div className="header-main-text">
                        <span className="color-header-text">Lifestyle as medicine:</span>
                        <span className="header-text">The six pillars</span>
                    </div>
                    <div className="header-main-button">
                        <button
                            className="arrow-left"
                            onMouseDown={() => startScrolling('left')}
                            onMouseUp={stopScrolling}
                            onMouseLeave={stopScrolling}
                            onClick={() => handleScroll('left')}
                        >
                            <img src="/left_arrow.svg" alt="Left Arrow"/>
                        </button>
                        <button
                            className="arrow-right"
                            onMouseDown={() => startScrolling('right')}
                            onMouseUp={stopScrolling}
                            onMouseLeave={stopScrolling}
                            onClick={() => handleScroll('right')}
                        >
                            <img src="/right_arrow.svg" alt="Right Arrow"/>
                        </button>
                    </div>
                </div>
                <div className="main-buttons">
                    <button>Nutrition</button>
                    <button>Physical activity</button>
                    <button>Restorative sleep</button>
                    <button>Stress management</button>
                    <button>Social connection</button>
                    <button>Substance abuse</button>
                </div>
                <div className="cards-box" ref={cardsContainerRef}>
                    {cardsData.map((card, index) => (
                        <div className="card" key={index}>
                            <div className="card-upper-section">
                                <div className="card-image">
                                    <img src={card.image} alt="card"/>
                                </div>
                                <div className="card-logo">
                                    <div className="card-logo-image">
                                        <img src={card.logo} alt="card-logo"/>
                                    </div>
                                    <div className="card-logo-number">
                                        {card.logoNumber}
                                    </div>
                                    <div className="card-logo-format">
                                        {card.logoFormat}
                                    </div>
                                </div>
                            </div>
                            <div className="card-lower-section">
                                <div className="card-name-header">
                                    {card.title}
                                </div>
                                <div className="card-name-description">
                                    <p>{card.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LastSection;

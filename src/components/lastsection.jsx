// LastSection.jsx
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
                    // Wrap the scroll to the start
                    container.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    // For smooth scrolling effect
                    container.scrollTo({ left: container.scrollLeft + scrollAmount, behavior: 'smooth' });
                }
            } else if (direction === 'left') {
                if (container.scrollLeft === 0) {
                    // Wrap the scroll to the end
                    container.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
                } else {
                    // For smooth scrolling effect
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
            image: "../../public/card1.png",
            logo: "../../public/card1_logo.svg",
            logoNumber: "121/80",
            logoFormat: "mmHg",
            title: "Nutrition",
            description: "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness."
        },
        {
            image: "../../public/card2.png",
            logo: "../../public/card2_logo.svg",
            logoNumber: "32",
            logoFormat: "minutes",
            title: "Physical activity",
            description: "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease."
        },
        {
            image: "../../public/card3.png",
            logo: "../../public/card3_logo.svg",
            logoNumber: "8",
            logoFormat: "hours",
            title: "Restorative sleep",
            description: "Consistent, quality sleep is essential for cognitive function and physical health."
        },
        {
            image: "../../public/card4.png",
            logo: "../../public/card4_logo.svg",
            logoNumber: "60",
            logoFormat: "bpm",
            title: "Stress management",
            description: "Effective stress management techniques are crucial for mental well-being and overall health."
        },
        {
            image: "../../public/card5.png",
            logo: "../../public/card5_logo.svg",
            logoNumber: "Feeling",
            logoFormat: "better",
            title: "Social connection",
            description: "Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health."
        },
        {
            image: "../../public/card6.png",
            logo: "../../public/card6_logo.svg",
            logoNumber: "62",
            logoFormat: "days",
            title: "Substance abuse",
            description: "Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health."
        }
    ];

    return (
        <div>
            <div className="frame-class">
                <img src="../../public/frame.png" alt="frame"/>
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
                            <img src="../../public/left_arrow.svg" alt="Left Arrow"/>
                        </button>
                        <button
                            className="arrow-right"
                            onMouseDown={() => startScrolling('right')}
                            onMouseUp={stopScrolling}
                            onMouseLeave={stopScrolling}
                            onClick={() => handleScroll('right')}
                        >
                            <img src="../../public/right_arrow.svg" alt="Right Arrow"/>
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

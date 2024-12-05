import "../styles/main.scss"

function MainSection(){
    return(
        <div className="main-section">
            <div className="finder-box">
                <div className="finder-search">
                    <img src="../../public/search.svg" alt="search"/>
                    <input type="text" placeholder="Condition, procedure, speciality..."/>
                </div>
                <div className="finder-location">
                    <img src="../../public/location.svg" alt="location"/>
                    <input type="text" placeholder="City, state, or zipcode"/>
                </div>
                <div className="finder-insurance">
                    <img src="../../public/medi.svg" alt="insurance"/>
                    <input type="text" placeholder="Insurance carrier"/>
                </div>
                <div className="findnow">
                    <img src="../../public/find_search.svg" alt="search"/>
                    <div className="findnow-text">Find now</div>
                </div>
            </div>

            <div className="main-section-box">
                <div className="main-section-left">
                    <div className="main-section-col-one">
                        <img src="../../public/col1_1.png" alt="Image"/>
                        <img src="../../public/col1_2.png" alt="Image"/>
                        <img src="../../public/col1_3.png" alt="Image"/>
                        <img src="../../public/col1_4.png" alt="Image"/>
                        {/* Unable to loop in four image so duplicated it */}
                        <img src="../../public/col1_1.png" alt="Image"/>
                        <img src="../../public/col1_2.png" alt="Image"/>
                        <img src="../../public/col1_3.png" alt="Image"/>
                        <img src="../../public/col1_4.png" alt="Image"/>
                    </div>
                    <div className="main-section-col-two">
                        <img src="../../public/col2_1.png" alt="Image"/>
                        <img src="../../public/col2_2.png" alt="Image"/>
                        <img src="../../public/col2_3.png" alt="Image"/>
                        <img src="../../public/col2_4.png" alt="Image"/>
                        {/* Unable to loop in four image so duplicated it */}
                        <img src="../../public/col2_1.png" alt="Image"/>
                        <img src="../../public/col2_2.png" alt="Image"/>
                        <img src="../../public/col2_3.png" alt="Image"/>
                        <img src="../../public/col2_4.png" alt="Image"/>
                    </div>
                </div>

                <div className="main-section-right">
                    <div>
                        Book an appointment with <span>lifestyle medicine</span> experts
                    </div>
                    <div>
                        Optimize your lifestyle and reverse chronic diseases.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSection

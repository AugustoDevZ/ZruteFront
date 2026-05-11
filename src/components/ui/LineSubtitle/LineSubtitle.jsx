import './LineSubtitle.css'


const LineSubtitle = ({ textContent, oneTitle, twoTitle }) => {
    return (
        <div className='line-allcontent'>
            <div className="line-content">
                <div className="line"/>
            </div>

            <div className="line-context">
                <h2 className="line-title">
                    <span className="line-font" >{oneTitle}</span>
                    <span className="line-font-rgb">{twoTitle}</span>
                </h2>

                <h3 className="line-description">
                    {textContent}
                </h3>
            </div>
        </div>
    )
}

export default LineSubtitle
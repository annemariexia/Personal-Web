import "../styles/IntroPage.css"
import GradHeadShot from "../assets/grad-photo.jpeg"

const IntroPage = () => {
    return (
      <div className="intro-page">
         <div className="photo-box">
            <img src={GradHeadShot} alt="grad-photo" className="grad-photo" />
          </div>
          <div className="text-box">
            <h3 className="subtitle">CS and CS: Harmonizing Tech and Thought</h3>
            <section className="education-background">
              <p>I graduated from UC Davis with a BS in Computer Science and Cognitive Science. </p>
              <p>Delving into the intricacies of the human mind while navigating the dynamic world of technology has enabled me to approach problems from multiple angles, blending analytical thinking with an understanding of human-centered design principles.</p>
              <p>Upon graduating from college, I recognized the transformative potential of machine learning decided to continue my academic journey at Columbia University.</p>
              <p>As a fullstack developer, I am driven to bridge the gap between technology and human needs. I believe that by embracing AI technologies and understanding user behavior and psychology, I can create innovative solutions that positively impact people's lives.</p>
            </section>
          </div>

          <div className="photo-box">
            <img src={GradHeadShot} alt="grad-photo" className="grad-photo" />
          </div>
          <div className="text-box">
            <h3 className="subtitle">CS and CS: Harmonizing Tech and Thought</h3>
            <section className="education-background">
              <p>I graduated from UC Davis with a BS in Computer Science and Cognitive Science. </p>
              <p>Delving into the intricacies of the human mind while navigating the dynamic world of technology has enabled me to approach problems from multiple angles, blending analytical thinking with an understanding of human-centered design principles.</p>
              <p>Upon graduating from college, I recognized the transformative potential of machine learning decided to continue my academic journey at Columbia University.</p>
              <p>As a fullstack developer, I am driven to bridge the gap between technology and human needs. I believe that by embracing AI technologies and understanding user behavior and psychology, I can create innovative solutions that positively impact people's lives.</p>
            </section>
          </div>
      </div>
      

      
    );
  }
  
  export default IntroPage;
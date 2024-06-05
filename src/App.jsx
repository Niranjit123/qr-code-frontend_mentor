import qrImage from '../qr-code-component-main/images/image-qr-code.png'
import './App.css'

function App() {

  return (
      <div className="container">
          <div className="card">
              <img src={qrImage} alt="" />
              <div className="text">
                <h2>Improve your front-end skills by building projects</h2>
                <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next levels</p>
              </div>
          </div>
       </div>
  )
}

export default App

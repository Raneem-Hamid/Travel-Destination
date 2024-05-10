import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
    <footer id="foooter">
    <div>
      <div class="d-none d-lg-flex  ms-5 p-4 p-lg-0">
        <a class="btn btn-light btn-xxl-square rounded-circle ms-3"
          href="https://www.facebook.com/tawjihi.black?mibextid=JRoKGi" id="circle-btn">
          <small class="fab fa-facebook-f text-primary" id="insideCircle-btn"></small>
        </a>
        <a class="btn btn-light btn-xxl-square rounded-circle ms-3"
          href="https://www.instagram.com/20_ranoom_11?igsh=Nms0cXFjdTBva2pj" id="circle-btn">
          <small class="fab fa-instagram text-primary" id="insideCircle-btn"></small>
        </a>
        <a class="btn btn-light btn-xxl-square rounded-circle ms-3"
          href="https://www.linkedin.com/in/raneem-hamid-4837a7244/" id="circle-btn">
          <small class="fab fa-linkedin-in text-primary" id="insideCircle-btn"></small>
        </a>
        <a class="btn btn-light btn-xxl-square rounded-circle ms-3" href="https://github.com/Raneem-Hamid"
          id="circle-btn">
          <small class="fab fa-github text-primary" id="insideCircle-btn"></small>
        </a>
      </div>
    </div>
    <div class="me-5">
      made with love by Raneem &copy; 2024
    </div>

  </footer>

		</>
  )
}

export default Footer
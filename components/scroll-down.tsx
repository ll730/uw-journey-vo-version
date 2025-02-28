"use client"

export function ScrollDown() {
  const scrollToContent = () => {
    const contentCard = document.querySelector(".content-card")
    if (contentCard) {
      contentCard.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="scroll-down" onClick={scrollToContent}>
      <span>Scroll Down</span>
      <div className="scroll-arrow"></div>
    </div>
  )
}


export default function ExamIntro({onClick}:{onClick:() => void}) {
  return (
    <>
      <p>Intro</p>
      <button onClick={onClick}>Continue</button>
    </>
  )
}
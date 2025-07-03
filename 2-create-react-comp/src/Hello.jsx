function Hello(){
    let myName = "Abubakar baig"
    let fullName = () => {
        return "Abubakar baig"
    }
    let number = 500
    return <h3>
        <p>Hello this is the future speaking.I am your master {myName}</p>
        <p>Hello this is the future speaking.I am your master {fullName()}</p>
        <p>Number {number}</p>
    </h3>
}
export default Hello;
const WelcomeMessage = ({onGetPostClicked}) => {
    return <>
        <center className="welcome-message">
            <h3 >There are no posts</h3>
            <button className="btn btn-primary" onClick={onGetPostClicked}>Get Posts From Server</button>
        </center>
    </>
}
export default WelcomeMessage;
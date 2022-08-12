const Text = ({ children, link }) => {

    const clickEvent = (link) => {
        window.location = link;
    }

    return (
        <div className="text" onClick={() => { clickEvent(link) }}>
            {children}
        </div>
    )
}

export default Text;
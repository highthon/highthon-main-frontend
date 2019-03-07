const SponsorItem = (props) => {
    return(
        <div className="sponsor-item">
            <img src={props.src}/><br/>
            <h1>{props.name}</h1>
        </div>
    )
};
export default SponsorItem;
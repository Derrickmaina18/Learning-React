
export default function Card() {
    return (
        <div className="card">
            <img
                style={{ width: '10rem' }}
                src="https://images.unsplash.com/photo-1553983658-0d7afeb5c53f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="animal" />
            <div className="card_texts">
                <p>Desert Camel</p>
                <a href="/cats">More Information</a>
            </div>
        </div>
    )
}
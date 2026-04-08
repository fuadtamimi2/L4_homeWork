import useScroll from "../hooks/useScroll";

function ScrollPage() {
    const endScreen = useScroll();

    return (
        <div className="container py-4">
            <h2>Scroll Page</h2>
            <p>Scroll down to the bottom of the page.</p>

            <div style={{ minHeight: "1800px", paddingTop: "20px" }}>
                <p>This is tall content for scrolling.</p>
                <p>Keep scrolling...</p>
            </div>

            {endScreen && <h4 style={{ color: "green" }}>You reached the bottom of the page!</h4>}
        </div>
    );
}

export default ScrollPage;

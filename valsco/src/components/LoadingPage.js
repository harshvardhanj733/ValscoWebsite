import "./LoadingPage.css"

export const Load = () => {
    setTimeout(boxNone, 820);
    function boxNone() {
        let box = document.getElementsByClassName("box")[0];
        console.log(box);
        box.style.display = "none";
        let text = document.getElementsByClassName("text")[0];
        text.style.display = "flex";
        text.style.flexWrap = "wrap";
        // text.style.justifyContent="center";
        // text.style.alignItems="center";
    }

    setTimeout(allDis, 1500);
    function allDis() {
        let text = document.getElementsByClassName("text")[0];
        text.classList.add("pos");

    }

    setTimeout(showOneByOne, 1000);

    let counter = 0;
    function showOneByOne() {

        setTimeout(function () {
            hide[counter].classList.add("show" + counter);
            if (counter < 4) {
                showOneByOne();
            }
            counter++;
        }, 600);
        let hide = document.getElementsByClassName("hide");

        setTimeout(out, 2000);
    }

    function out() {


    }
    return (
        <>
            <div className="box">
                <video src="tv.mp3"></video>
            </div>
            <div className="text">
                <span className="center">V</span>
                <span className="hide">A</span>
                <span className="hide">L</span>
                <span className="hide">S</span>
                <span className="hide">C</span>
                <span className="hide">O</span>
            </div>
        </>
    );
}

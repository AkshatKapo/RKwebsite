const createNav = () => {
    var nav = document.querySelector('.navbar');

    nav.innerHTML =
        ` <style>
        form.example input[type=text] {
            padding: 10px;
            font-size: 17px;
            border: 1px solid grey;
            float: left;
            width: 80%;
            background: #f1f1f1;
        }

        form.example button {
            width: 20%;
            height: 43px;
            padding: 5px;

            border: 1px solid #d1d1d1;
           font-family: "Baskerville Old Face";
            background: #0b7dda;
            color: black;
            outline: none;
        }

        form.example button:hover {
            background: #0b7dda;
        }



    </style>
         <div class="nav">
        <img src=logo2.jpg class="brand-logo" alt="">
        <div class="nav-items">
            <form class="example" action="/action_page.php" style="max-width:300px">
                <input type="text" placeholder="Search..">
                <button type="submit"><i class="fa fa-search">Submit</i></button>
            </form>
            <a href="#"><img src="user.png" alt=""></a>
            <a href="#"><img src="cart.png" alt=""></a>
        </div>
    </div>
    <ul class="links-container">
        <li class="link-item"><a href="#" class="link">home</a></li>
        <li class="link-item"><a href="#" class="link">women</a></li>
        <li class="link-item"><a href="#" class="link">men</a></li>
        <li class="link-item"><a href="#" class="link">kids</a></li>
        <li class="link-item"><a href="#" class="link">accessories</a></li>
    </ul>
    
`;
}

createNav();
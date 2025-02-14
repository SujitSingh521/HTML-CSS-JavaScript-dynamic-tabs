# HTML-CSS-JavaScript-dynamic-tabs


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fertility Treatments</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f9f9f9;
        }

        .container {
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            max-width: 800px;
            width: 100%;
            text-align: center;
        }

        .sub-title {
            color: #007bff;
            font-size: 1.2rem;
            font-weight: bold;
        }

        .main-title {
            font-size: 1.8rem;
            margin: 10px 0;
        }

        .description {
            font-size: 1rem;
            margin-bottom: 15px;
            color: #666;
        }

        .content {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            gap: 15px;
        }

        /* Left Side: Tabs */
        .tabs {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 10px;
            min-width: 200px;
        }

        .tab {
            padding: 10px;
            background: #007bff;
            color: #fff;
            text-align: center;
            border-radius: 5px;
            cursor: pointer;
            transition: 0.3s;
        }

        .tab:hover {
            background: #0056b3;
        }

        /* Right Side: Image */
        .image-box {
            flex: 1.5;
            display: flex;
            justify-content: center;
            align-items: center;
            max-width: 100%;
        }

        .image-box img {
            width: 100%;
            max-width: 350px;
            height: 250px;
            object-fit: cover;
            border-radius: 8px;
            transition: opacity 0.3s ease-in-out;
        }

        /* Responsive */
        @media (max-width: 600px) {
            .content {
                flex-direction: column;
                align-items: center;
            }

            .image-box img {
                max-width: 100%;
            }
        }
    </style>
</head>

<body>

    <div class="container">
        <h3 class="sub-title">Fertility Solutions</h3>
        <h1 class="main-title">Comprehensive Fertility Treatments</h1>
        <p class="description">We offer a broad range of advanced treatments tailored to your unique circumstances:</p>

        <div class="content">
            <!-- Left Side: Tabs -->
            <div class="tabs">
                <div class="tab" onclick="showImage('icsi')">ICSI (Intracytoplasmic Injection)</div>
                <div class="tab" onclick="showImage('imsi')">IMSI</div>
                <div class="tab" onclick="showImage('microchip')">MicroChip Technology</div>
                <div class="tab" onclick="showImage('embryoscope')">EmbryoScope® Time-Lapse System</div>
            </div>

            <!-- Right Side: Image -->
            <div class="image-box">
                <img id="treatmentImage"
                    src="https://images.pexels.com/photos/604684/pexels-photo-604684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Default Image">
            </div>
        </div>
    </div>

    <script>
        function showImage(treatment) {
            let image = document.getElementById("treatmentImage");

            let images = {
                "icsi": "https://images.pexels.com/photos/604684/pexels-photo-604684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                "imsi": "https://png.pngtree.com/thumb_back/fh260/background/20230615/pngtree-landscape-landscape-photo-image_2902263.jpg",
                "microchip": "https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                "embryoscope": "https://png.pngtree.com/thumb_back/fh260/background/20230411/pngtree-nature-forest-sun-ecology-image_2256183.jpg"
            };

            image.style.opacity = "0.5"; // Smooth fade effect
            setTimeout(() => {
                image.src = images[treatment];
                image.style.opacity = "1";
            }, 200);
        }
    </script>

</body>

</html>

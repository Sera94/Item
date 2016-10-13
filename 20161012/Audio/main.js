/**
 * Created by Administrator on 2016/10/12 0012.
 */

(function () {

    var target = document.querySelector("#target");
    var audio = document.querySelector("#audio");

    target.addEventListener("dragover", function (e) {
        e.preventDefault();

    });

    target.addEventListener("drop", function (e) {
        e.preventDefault();

        // console.log(e.dataTransfer.files);

        var files = e.dataTransfer.files;
        var reader;
        console.log(files);

        if (files && files.length) {
            // var file = files[0];

            var file;
            for (var i = 0; i < files.length; i++) {
                file = files[i];
                console.log(file);

                switch (file.type) {
                    case "text/plain":
                        reader = new FileReader();
                        reader.onload = function () {
                            target.innerHTML = reader.result;
                        };
                        reader.readAsText(file);
                        break;
                    case "image/jpeg":
                        reader = new FileReader();
                        reader.onload = function () {
                            target.innerHTML = "<img src='" + reader.result + "'>";
                        };
                        reader.readAsDataURL(file);
                        break;
                    case "audio/mp3":
                        reader = new FileReader();
                        reader.onload = function () {
                            // target.innerHTML = "<audio + controls='controls' src='" + reader.result + "'>";
                        };

                        var divContainer = document.createElement("div");
                        divContainer.innerHTML = file.name;
                        // console.log(divContainer);
                        target.appendChild(divContainer);

                        //一起加进去，点击时输出最后一个；依次加入，点击正常
                        divContainer.onclick = function () {
                            //
                            // console.log(file.name);
                            // divContainer.innerHTML = "<audio + controls='controls' src='" + reader.result + "'>";
                            //
                            // var audio = document.querySelector("div audio");
                            // audio.style.display = "none";
                            // audio.play();

                            audio.src = reader.result;
                        }
                        reader.readAsDataURL(file);

                        break;
                    default:
                        console.log(file);
                        break;
                }

            }

        }


    });


})();
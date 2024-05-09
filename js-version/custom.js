document.addEventListener('DOMContentLoaded', function () {

	document.querySelector('#btn-one').addEventListener('click', function () {
		html2canvas(document.querySelector('#content')).then((canvas) => {
			let base64image = canvas.toDataURL('image/png');

			let pdfWidth = 395.28;
			let pdfHeight = 841.89;

			let pdf = new jsPDF('p', 'px', [pdfWidth, pdfHeight]);
			let imageWidth = pdfWidth - 30;
			let imageHeight = (imageWidth * canvas.height) / canvas.width

			pdf.addImage(base64image, 'PNG', 15, 15, imageWidth, imageHeight);
			pdf.save('pdf');
		});
	});
});



function createQuestions() {
	var num_of_elements = document.getElementById("numInput").value;
	num_of_elements = parseInt(num_of_elements);

	if (!isNaN(num_of_elements) && num_of_elements > 0) {
		var quastionElement = document.getElementById("quastion");
		quastionElement.innerHTML = "";

		var main_div = createCircleContainer("row");
		quastionElement.appendChild(main_div);



		var left_div = createCircleContainer("col-md-4 left_div");
		main_div.appendChild(left_div);

		var center_div = createCircleContainer("col-md-4 center_div");
		main_div.appendChild(center_div);

		var right_div = createCircleContainer("col-md-4 right_div");
		main_div.appendChild(right_div);	


		var left_ul = createCircleContainerUl("left");
		left_div.appendChild(left_ul);

		var center_ul = createCircleContainerUl("center");
		center_div.appendChild(center_ul);

		var right_ul = createCircleContainerUl("right");
		right_div.appendChild(right_ul);



		function createCircleContainer(className) {
			var circleContainer = document.createElement("div");
			circleContainer.className = className;
			return circleContainer;
		}


		function createCircleContainerUl(className) {
			var circleContainerul = document.createElement("ul");
			circleContainerul.className = className;
			return circleContainerul;
		}

		function createNumOfQuastion(i) {
			var num_of_quastion = document.createElement("div");
			num_of_quastion.className = "num_of_quastion";
			num_of_quastion.innerHTML = "<span>" + i + "_</span>";
			return num_of_quastion;
		}

		function createCircle(letters) {
			var circle = document.createElement("div");
			circle.className = "circle";
			var letter = document.createElement("span");
			letter.className = "letter";
			letter.innerHTML = letters;
			circle.appendChild(letter);
			return circle;
		}

		var columnClass;
		for (var i = 1; i <= num_of_elements; i++) {
			if (i < 34) {
				columnClass = left_ul;
			} else if (i < 67) {
				columnClass = center_ul;
			} else if (i < 100) {
				columnClass = right_ul;
			}
			else{
				return false;
			}

			var circleContainer = createCircleContainer("circle-container");
			var num_of_quastion = createNumOfQuastion(i);
			circleContainer.appendChild(num_of_quastion);

			var letters = ["", "", "", "", ""];
			for (var j = 0; j < letters.length; j++) {
				var circle = createCircle(letters[j]);
				circleContainer.appendChild(circle);
			}

			columnClass.appendChild(circleContainer);

		}
	} else {
		alert("Please enter a value greater than 0");
	}
}
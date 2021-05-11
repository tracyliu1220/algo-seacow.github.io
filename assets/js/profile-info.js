var profileImgs = document.getElementsByClassName("profile-img");
var profileInfos = document.getElementsByClassName("profile-info");

function showInfo(profileInfo, profileImg) {
	if (profileInfo.show == 0) {
		// for (var i = 0; i < profileInfos.length; i++) {
		// 	profileImgs[i].className = "profile-img";
		// 	profileInfos[i].className = "profile-info inactive";
		// 	profileInfos[i].style.display = "none";
		// 	profileInfos[i].show = 0;
		// }
		profileImg.className = "profile-img active";
		profileInfo.style.display = "inline-flex";
		profileInfo.show = 1;
		setTimeout(function() {
			profileInfo.className = "profile-info active";
		}, 300);
	} else {
		profileImg.className = "profile-img";
		profileInfo.className = "profile-info inactive";
		profileInfo.style.display = "none";
		profileInfo.show = 0;
	}
}

// var profile = document.getElementById("test1");

// profile.addEventListener("click", function(){
// 	showInfo("test1-profile-info", profile);
// }, false);

for (var i = 0; i < profileInfos.length; i++) {
	profileInfos[i].style.display = "none";
}

for (var i = 0; i < profileImgs.length; i++) {
	(function() {
		profileImgs[i].show = 0;
		profileInfos[i].show = 0;
		var profileInfo = profileInfos[i]; //document.getElementById("profile-info-" + i);
		var profileImg = profileImgs[i];
		profileImg.addEventListener("click", function(){
			showInfo(profileInfo, profileImg);
		});
	}());
}
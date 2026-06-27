function spectrSyncAcceptanceErrors(scope) {
	var root = scope || document;
	var checkLabels = root.querySelectorAll(".input__check");

	checkLabels.forEach(function (label) {
		var checkbox = label.querySelector('input[type="checkbox"]');
		var invalidWrap = label.querySelector(".wpcf7-not-valid");
		var hasError = Boolean(invalidWrap) || (checkbox && !checkbox.checked && label.closest(".wpcf7-form.invalid"));

		label.classList.toggle("input__check_error", Boolean(hasError));
	});
}

document.addEventListener("change", function (event) {
	if (!event.target.matches('.input__check input[type="checkbox"]')) {
		return;
	}

	spectrSyncAcceptanceErrors(event.target.closest("form"));
});

document.addEventListener("wpcf7invalid", function (event) {
	spectrSyncAcceptanceErrors(event.target);
});

document.addEventListener("wpcf7submit", function (event) {
	spectrSyncAcceptanceErrors(event.target);
});

document.addEventListener("wpcf7mailsent", function () {
	spectrSyncAcceptanceErrors(document);

	if (
		typeof window.spectrTheme !== "undefined" &&
		window.spectrTheme.thanksUrl
	) {
		window.location.href = window.spectrTheme.thanksUrl;
	}
});

(function () {
	var lastZoomRatio = window.devicePixelRatio || 1;
	var zoomReloadTimer = null;

	function spectrHandleZoomChange() {
		var currentZoomRatio = window.devicePixelRatio || 1;

		if (currentZoomRatio === lastZoomRatio) {
			return;
		}

		lastZoomRatio = currentZoomRatio;
		window.clearTimeout(zoomReloadTimer);
		zoomReloadTimer = window.setTimeout(function () {
			window.location.reload();
		}, 150);
	}

	window.addEventListener("resize", spectrHandleZoomChange);
})();

document.querySelectorAll(".input__check input").forEach(function (input) {
	input.checked = true;
});

document.addEventListener("DOMContentLoaded", function () {
	document.querySelectorAll(".input-url").forEach(function (input) {
		input.value = window.location.href;
	});

	document.querySelectorAll("[data-practic-hidden]").forEach(function (item) {
		item.hidden = true;
		item.style.display = "none";
	});
});

document.addEventListener("click", function (event) {
	var button = event.target.closest("[data-practic-more-button]");

	if (!button) {
		return;
	}

	var section = button.closest(".practic");

	if (!section) {
		return;
	}

	section.querySelectorAll("[data-practic-hidden]").forEach(function (item) {
		item.hidden = false;
		item.style.display = "";
		item.removeAttribute("data-practic-hidden");
		item.classList.remove("practic__item_hidden");
	});

	button.style.display = "none";
	button.hidden = true;
});

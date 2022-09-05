export const openModal = (callback: () => void) => {
	callback();
	window.document.body.classList.add("modal-open");
};
export const closeModal = (callback: () => void) => {
	callback();
	window.document.body.classList.remove("modal-open");
};

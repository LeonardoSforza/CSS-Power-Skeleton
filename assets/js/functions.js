// ******************************************************
// * Welcome to CSS Power,                              *
// * Below you will find the algorithm which will       *
// * bring the power to color changing to your website  *
// ******************************************************

// This is the CSS-Power function which will map your keys to :root 
// You can close this page, you dont need to edit anything here

export const ultimateCSSPower = (listOfChanges, btn) => {
    btn.addEventListener("click", () => {
        for (const [key, value] of Object.entries(listOfChanges)) {
            document.documentElement.style.setProperty(key, value);
        }
    });
};

export default { ultimateCSSPower };
import * as Api from "./api.js";

const TabsContainer = document.querySelector(".Tabs");
const Tabs = Array.from(TabsContainer.getElementsByTagName("div"));

Tabs.forEach(Tab => {
    Tab.addEventListener("click", () => {
        const Content = document.getElementById(Tab.getAttribute("href"));
        const CloseButton = Tab.querySelector(".CloseButton");

        if (CloseButton) {
            CloseButton.addEventListener("click", () => {
                Tab.style.opacity = "0";
                if (Content) {
                    Content.style.opacity = "0";
                    setTimeout(() => {
                        Content.remove();
                    }, 250);
                }
                setTimeout(() => {
                    Tab.remove();
                }, 250);
            });
        }

        if (Content) {
            Tab.style.borderBottom = "2px solid #207dff";
            Content.style.display = "flex";

            Tabs.forEach(OtherTab => {
                if (OtherTab !== Tab) {
                    OtherTab.style.borderBottom = "2px solid transparent";

                    const OtherContent = document.getElementById(OtherTab.getAttribute("href"));
                    if (OtherContent && Content !== OtherContent) {
                        OtherContent.style.display = "none";
                    }
                }
            });
        }
    });
});
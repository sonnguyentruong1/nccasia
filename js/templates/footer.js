const locations = [
    { name: "HA NOI 1", url: "https://maps.app.goo.gl/4b1yWzyB8E2AQVpVA", address: "2nd Floor, CT3 The Pride, To Huu st, Ha Dong Dist" },
    { name: "VINH", url: "https://goo.gl/maps/tjkFGN3iDCEpG4fU7", address: "4th Floor, 138 Ha Huy Tap St., Vinh City" },
    { name: "SAI GON", url: "https://goo.gl/maps/6uGkwv6dpVg66CNt7", address: "4th Floor, 120 Kha Van Can Str, Hiep Binh Chanh Ward, Thu Duc City" },
    { name: "HA NOI 2", url: "https://goo.gl/maps/4qtJTTHFhKQ7bcmN9", address: "7th Floor, Vinfast My Dinh Building, 8 Pham Hung St., Cau Giay Dist." },
    { name: "QUY NHON", url: "https://goo.gl/maps/NGYZFbZ1kAG2mF2B7", address: "3rd Floor, Hibecco Building, 307 Nguyen Thi Minh Khai St. Quy Nhon City" },
    { name: "NCC Japan", url: "https://www.nccsoft.jp/", address: "2-35-5 Higashiyukigaya, Ota City, Tokyo, Japan 145-0065" },
    { name: "HA NOI 3", url: "https://goo.gl/maps/VykV996Pra8XCUYo8", address: "5th Floor, Hong Ha Tower, 89 Thinh Liet St., Hoang Mai Dist." },
    { name: "DA NANG", url: "https://goo.gl/maps/euZRpDDAFZsXb4tX6", address: "3rd Floor, TP Building, 268 30/4 St., Hoa Cuong Bac Ward, Hai Chau Dist." }
]

function footerItem(location) {
    return `
            <a href="${location.url}" target="_blank">
                <div class="header_footer">
                <i  class="fa-sharp fa-solid fa-location-dot fa-locations"></i>
                    <div class="link-footer ">
                        <p><span class="text-footer">${location.name} |</span>${location.address}</p>
                    </div>
                </div>
            </a>
    `;
}

function renderFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (!footerContainer) return; 

    const footerItemsHTML = locations.map(location => footerItem(location))
    const firstThreeItems = footerItemsHTML.slice(0, 3).join('');
    const nextThreeItems = footerItemsHTML.slice(3, 6).join('');
    const remainingItems = footerItemsHTML.slice(6).join('');

    footerContainer.innerHTML = `
            <div class="footer">
                <div class="footer_head">
                    <div class="grid footer_head-category">
                        <div class="footer_head-collection ">
                        <div class="footer_head-item--infomation">
                            <div class="logo_image"><img loading="lazy" src="./assets/images/logo.png" width="120"
                                    height="120" alt=""></div>
                            <div class="footer_head_item_bottom">
                                <p class="footer_head-item-phone-text">(+84) 2466874606</p>
                                <p class="footer_head-item-email-text">info@ncc.asia
                            </div>
                        </div>
                        </div>
                        <div class="footer_head-collection footer_head-collection-address">
                        <div class="footer_head-list-first ">
                            ${firstThreeItems}
                        </div>
                        </div>
                        <div class="footer_head-collection footer_head-collection-address">
                        <div class="footer_head-list-main ">
                            ${nextThreeItems}
                        </div>
                        </div>
                        <div class="footer_head-collection footer_head-collection-address">
                        <div class="footer_head-list-main ">
                            ${remainingItems}
                        </div>
                        </div>
                    </div>
                    <div class="grid nav_footer">
                        <div class="nav_footer-head">
                            <p class="footer_head-item-phone-text">(+84) 2466874606</p>
                            <p class="footer_head-item-email-text">info@ncc.asia</p>
                        </div>
                        <div class="nav_footer-adreess">
                             ${footerItemsHTML.join('')}
                        </div>
                    </div>
                </div>

                <div class="footer_bottom">
                <div class=" grid footer_bottom-container">
                    <div class="footer_social">
                        <div class="footer_social-image"><a href="https://twitter.com/nccsoft" aria-label="twitter"
                                target="_blank"><img loading="lazy" src="./assets/images/tweet.svg" width="40"
                                    height="40" alt=""></a></div>
                        <div class="footer_social-image"><a href="https://www.facebook.com/nccsoft.com.vn"
                                aria-label="facebook" target="_blank"><img loading="lazy"
                                    src="./assets/images/facebook.svg" width="40" height="40" alt=""></a></div>
                        <div class="footer_social-image"><a href="/" aria-label="google"><img loading="lazy"
                                    src="./assets/images/google.svg" width="40" height="40" alt=""></a></div>
                    </div>
                    <div class="footer_copyright">
                        <p>2023 &copy; NCC Vietnam. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

renderFooter();
// 모달 열기 및 닫기 처리
const modal = document.getElementById("detailsModal");
const btn = document.getElementById("detailsButton");
const closeBtn = document.getElementsByClassName("close")[0];

// 버튼 클릭 시 모달 열기
btn.onclick = function(event) {
  event.preventDefault(); // 링크 클릭 시 페이지 이동 방지
  modal.style.display = "block";
}

// 닫기 버튼 클릭 시 모달 닫기
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// 모달 외부 클릭 시 모달 닫기
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// JavaScript로 동적 요소 생성
// 모든 이미지에 클릭 이벤트 추가
document.querySelectorAll(".image-group img").forEach(img => {
    img.addEventListener("click", function () {
        // 모달 생성
        const modal = document.createElement("div");
        modal.style.position = "fixed";
        modal.style.top = "0";
        modal.style.left = "0";
        modal.style.width = "100%";
        modal.style.height = "100%";
        modal.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        modal.style.display = "flex";
        modal.style.justifyContent = "center";
        modal.style.alignItems = "center";
        modal.style.zIndex = "1000";

        // 큰 이미지 생성
        const img = document.createElement("img");
        img.src = this.src; // 클릭된 이미지의 src 사용
        img.style.maxWidth = "80%";
        img.style.maxHeight = "80%";
        img.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.5)";
        img.style.borderRadius = "10px";

        // 모달 닫기
        modal.addEventListener("click", function () {
            modal.remove(); // 모달 삭제
        });

        // 모달에 이미지 추가
        modal.appendChild(img);
        document.body.appendChild(modal); // 모달 추가
    });
});


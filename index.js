setTimeout(() => {
  document.getElementById("mathInput").addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9+\-*/]/g, ""); // Remove invalid characters
  });
}, 500);

export function handleContactClick(info: { type: string; value: string }) {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  switch (info.type) {
    // 📞 PHONE
    case "phone":
      if (isMobile) {
        window.location.href = `tel:${info.value}`;
      } else {
        navigator.clipboard.writeText(info.value);
      }
      break;

    // 📧 EMAIL
    case "email":
      window.location.href = `mailto:${info.value}`;
      break;

    // 📍 ADDRESS
    case "address":
      const encoded = encodeURIComponent(info.value);
      window.open(`https://www.google.com/maps/search/?api=1&query=${encoded}`);
      break;

    // ✨ DEFAULT → kopieren
    default:
      navigator.clipboard.writeText(info.value);
      break;
  }
}

// Detalye para sa Torretto Auto Spa & Detailing (Kasama ang bagong shop number)
const contactInfo = {
    name: "Anton Sy Guiang",
    phone: "09563681889",
    altPhone: "09778547465",
    email: "torrettoautospa@gmail.com",
    title: "Owner / Founder",
    org: "Torretto Auto Spa & Detailing"
};

// Save Contact (vCard functionality - direktang nagse-save sa contact book)
document.getElementById('saveContactBtn').addEventListener('click', function(e) {
    e.preventDefault();
    
    const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.name}
ORG:${contactInfo.org}
TITLE:${contactInfo.title}
TEL;TYPE=WORK,VOICE:${contactInfo.phone}
TEL;TYPE=CELL,VOICE:${contactInfo.altPhone}
EMAIL;TYPE=WORK:${contactInfo.email}
END:VCARD`;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        const encodedVCard = encodeURIComponent(vcardData);
        window.location.href = `data:text/vcard;charset=utf-8,${encodedVCard}`;
    } else {
        const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${contactInfo.name.replace(/\s+/g, '_')}.vcf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }
});

// Email Link Click Handler na may Gmail web fallback
document.getElementById('emailLink').addEventListener('click', function(e) {
    e.preventDefault();
    
    const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=torrettoautospa@gmail.com&su=Inquiry%20regarding%20Torretto%20Auto%20Spa%20%26%20Detailing";
    window.location.href = "mailto:torrettoautospa@gmail.com?subject=Inquiry%20regarding%20Torretto%20Auto%20Spa%20%26%20Detailing";
    
    setTimeout(function() {
        window.open(gmailUrl, '_blank');
    }, 500);
});
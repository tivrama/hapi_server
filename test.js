!window.lkhd_cIGiot && addEventListener('message', function(m) {
    if (m.data.id === 'cIGiot') {
        if (window._satellite && window._satellite.lkhdImpression) { window._satellite.lkhdImpression(m.data.id, m.data.type) } else {
            (window.s_lkhd = window.s_lkhd || []).push(m.data) } } });
window.lkhd_cIGiot = 1

export function initHubSpotForm(containerId) {
    const checkHubSpot = () => {
        if (window.hbspt?.forms) {
            window.hbspt.forms.create({
                portalId: "241956451",
                formId: "17726b48-6edb-417c-bafd-ae1991dda95a",
                region: "na2",
                target: `#${containerId}`
            });
        }
        else {
            setTimeout(checkHubSpot, 100);
        }
    };
    checkHubSpot();
}

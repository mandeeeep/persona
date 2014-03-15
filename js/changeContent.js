$(document).ready(function() {
    $('#changedContent').load('web/aboutme.html');
    $('#Educational').bind('click', function() {
        $('li').removeClass('active');
        $('#Educational').addClass('active');
        $('#changedContent').load('web/educational.html');
    });
    $('#Technical').bind('click', function() {
        $('li').removeClass('active');
        $('#Technical').addClass('active');
        $('#changedContent').load('web/technical.html');
    });
    $('#ExtraCurricular').bind('click', function() {
        $('li').removeClass('active');
        $('#ExtraCurricular').addClass('active');
        $('#changedContent').load('web/extracurricular.html');
    });
    $('#AboutMe').bind('click', function() {
        $('li').removeClass('active');
        $('#AboutMe').addClass('active');
        $('#changedContent').load('web/aboutme.html');
    });
    $('#eMarkets').bind('click', function() {
        $('li').removeClass('active');
        $('#eMarkets').addClass('active');
        $('#changedContent').load('web/emarkets.html');
    });
    $('#iPlay').bind('click', function() {
        $('li').removeClass('active');
        $('#iPlay').addClass('active');
        $('#changedContent').load('web/iplay.html');
    });
    $('#IMS').bind('click', function() {
        $('li').removeClass('active');
        $('#IMS').addClass('active');
        $('#changedContent').load('web/ims.html');
    });
    $('#HMS').bind('click', function() {
        $('li').removeClass('active');
        $('#HMS').addClass('active');
        $('#changedContent').load('web/hms.html');
    });
    $('#Pahuna').bind('click', function() {
        $('li').removeClass('active');
        $('#Pahuna').addClass('active');
        $('#changedContent').load('web/pahuna.html');
    });
    $('#CareWave').bind('click', function() {
        $('li').removeClass('active');
        $('#CareWave').addClass('active');
        $('#changedContent').load('web/carewave.html');
    });
    $('#KathaHamro').bind('click', function() {
        $('li').removeClass('active');
        $('#KathaHamro').addClass('active');
        $('#changedContent').load('web/kathahamro.html');
    });
    $('#CSR').bind('click', function() {
        $('li').removeClass('active');
        $('#CSR').addClass('active');
        $('#changedContent').load('web/csr.html');
    });
    $('#OReader').bind('click', function() {
        $('li').removeClass('active');
        $('#OReader').addClass('active');
        $('#changedContent').load('web/oreader.html');
    });
    $('#MINT').bind('click', function() {
        $('li').removeClass('active');
        $('#MINT').addClass('active');
        $('#changedContent').load('web/mint.html');
    });
    $('#JobExperience').bind('click', function() {
        $('li').removeClass('active');
        $('#JobExperience').addClass('active');
        $('#changedContent').load('web/jobexperience.html');
    });
    $('#SOITS').bind('click', function() {
        $('li').removeClass('active');
        $('#SOITS').addClass('active');
        $('#changedContent').load('web/soits.html');
    });
});
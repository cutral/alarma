var setHr = "";
var setmin = "";
var setsec = "";

function displayDefault() {

    var dat = new Date();
    var hr = dat.getHours();
    var min = dat.getMinutes();
    var sec = dat.getSeconds();

    ddlAmPm.style.visibility = 'hidden';

    //$('#ddlAmPm').hide();

    $('#mer').hide();
    if (document.getElementById("rbtnNonMilitary").checked == true) {
        ddlHourNonMilitary.style.display = '';
        ddlHourMilitary.style.display = 'none';
        ddlAmPm.style.visibility = 'visible';
        document.getElementById('mer').style.display = '';
        if (hr > 12) {
            hr = hr - 12;
            document.getElementById('mer').value = "PM";

        }
        else {
            document.getElementById('mer').value = "AM";
        }
    }
    else {
        ddlHourMilitary.style.display = '';
        ddlHourNonMilitary.style.display = 'none';
        document.getElementById('mer').value = "";

    }

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;

    $('#hour').val(hr + " : ");
    $('#min').val(min + " : ");
    $('#sec').val(sec);


    setTimeout("displayDefault()", 1000);


    $("#SetAlarm").click(SetAlarmTime);
    $("#ResetAlarmr").click(ResetAlarm);
    $("#rbtnMilitary").click(Setdefault);
    $("#rbtnNonMilitary").click(Setdefault);
    $("#rbtnRingtone").click(modealarm);
    $("#rbtnRadio").click(modealarm);
    $("#rbtnYoutube").click(modealarm);

}

function modealarm() {
    //alert("start");
    $('#divSounds').hide();
    $('#divRadio').hide();

    $(document).ready(function () {
        if (document.getElementById('rbtnRingtone').checked) {
            $('#divSounds').show();
            $('#divYoutube').hide();
        } else if (document.getElementById('rbtnRadio').checked) {
            $('#divRadio').show();
            $('#divYoutube').hide();
        }
        else {
            $('#divYoutube').show();

        }
    });

}

function Check() {

    var dat = new Date();
    var hr = dat.getHours();
    var min = dat.getMinutes();
    var sec = dat.getSeconds();
    var sysmer;
    var mer;
    sysmer = "";
    mer = "";

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;

    if (document.getElementById("rbtnNonMilitary").checked == true) {
        //alert("test");
        if (hr > 12) {
            hr = hr - 12;
            sysmer = "PM";
        }
        else {
            sysmer = "AM";
        }

        if (document.getElementById("ddlAmPm") != null) {
            var skillsSelect = document.getElementById("ddlAmPm");
            mer = skillsSelect.options[skillsSelect.selectedIndex].text;
        }
    }
    else {
        mer = "";
        sysmer = "";
    }

    if (hr == setHr && min == setmin && sec == setsec && mer == sysmer) {

        if (document.getElementById('rbtnYoutube').checked) {
            window.location = document.getElementById("youtubelink").value;
        }
        else if (document.getElementById('rbtnRingtone').checked) {
            var playone = ($('#ddlaudio option:selected').data('status'));
            final_test_start("mp3_src", playone);
        }
        else {
            var playone = ($('#ddlradio option:selected').data('src'));
            final_test_start("mp3_src", playone);

        }


        document.getElementById('SetAlarm').disabled = false;
        document.getElementById('ddlHourMilitary').disabled = false;
        document.getElementById('ddlMinutes').disabled = false;
        document.getElementById('ddlSeconds').disabled = false;
        document.getElementById('ddlHourNonMilitary').disabled = false;
        document.getElementById('ddlAmPm').disabled = false;
        $('#ddlaudio').prop('selectedIndex', 0);
        $('#ddlradio').prop('selectedIndex', 0);
    }
    setTimeout("Check()", 1000);

}

function start_audio_sound() {

    $('#test_start').click(function () {
        var playone = ($('#ddlaudio option:selected').data('status'));
        final_test_start("mp3_src", playone);
    });

}

function start_radio_player() {
    $('#radio_start').click(function () {
        var playone = ($('#ddlradio option:selected').data('src'));
        final_test_start("mp3_src", playone);
    });
}

function final_test_start(mp3_src, playone) {
    var audio = $("player");
    var mp3_src = $("#" + mp3_src).attr("src", playone);
    //$('audio').get(0).pause();
    $('audio').get(0).load();
    $('audio').get(0).play();
}

function test_stop() {    $('#player').trigger('pause');    }

function ResetAlarm() {

            setHr = "";
            setmin = "";
            setsec = "";
            
            document.getElementById('SetAlarm').disabled = false;
            document.getElementById('ddlHourMilitary').disabled = false;
            document.getElementById('ddlMinutes').disabled = false;
            document.getElementById('ddlSeconds').disabled = false;
            document.getElementById('ddlHourNonMilitary').disabled = false;
            document.getElementById('ddlAmPm').disabled = false;
            $('#ddlaudio').prop('selectedIndex', 0);
            $('#ddlradio').prop('selectedIndex', 0);


            $('#player').trigger('pause');

            //location.reload();
           

            Setdefault();

        }

function SetAlarmTime() {

            if (document.getElementById("rbtnNonMilitary").checked == true) {
                setHr = document.getElementById('ddlHourNonMilitary').value;
            }
            else {
                setHr = document.getElementById('ddlHourMilitary').value;
            }

            setmin = document.getElementById('ddlMinutes').value;
            setsec = document.getElementById('ddlSeconds').value;

            document.getElementById('SetAlarm').disabled = true;
            document.getElementById('ddlHourMilitary').disabled = true;
            document.getElementById('ddlMinutes').disabled = true;
            document.getElementById('ddlSeconds').disabled = true;
            document.getElementById('ddlHourNonMilitary').disabled = true;
            document.getElementById('ddlAmPm').disabled = true;

            Check();
        }

function Setdefault() {

            var dat = new Date();

            if (dat.getHours() < 10) {
                document.getElementById('ddlHourMilitary').value = "0" + dat.getHours();
            }
            else {
                document.getElementById('ddlHourMilitary').value = dat.getHours();
            }

            if (dat.getMinutes() < 10) {
                document.getElementById('ddlMinutes').value = "0" + dat.getMinutes();
            }
            else {
                document.getElementById('ddlMinutes').value = dat.getMinutes();
            }

            if (dat.getSeconds() < 10) {
                document.getElementById('ddlSeconds').value = "0" + dat.getSeconds();
            }
            else {
                document.getElementById('ddlSeconds').value = dat.getSeconds();
            }


            if (document.getElementById("rbtnNonMilitary").checked == true) {

                var ind;
                var hrdef = dat.getHours();
                var hrdefTMP;
                hrdefTMP = hrdef;

                if (hrdef > 12) {
                    hrdef = hrdef - 12;
                }
                if (hrdef < 10) hrdef = '0' + hrdef;

                document.getElementById('ddlHourNonMilitary').value = hrdef;

                if (hrdefTMP > 12) {
                    hrdefTMP = hrdefTMP - 12;
                    ind = 1;
                }
                else {
                    ind = 0;
                }

                if (document.getElementById("ddlAmPm") != null) {
                    document.getElementById('ddlAmPm').selectedIndex = ind;
                }
            }




        }

$(document).ready(function () {
            Setdefault();
            displayDefault();
            modealarm();
            $("#ddlaudio").attr("onchange", start_audio_sound);
            $("#test_start").click(test_start);
            $("#test_stop").click(test_stop);
            $("#ddlradio").attr("onchange", start_radio_player);
            //$("#radio_start").click(test_start_radio);
            $("#radio_stop").click(test_stop);
            var myArray = ['https://youtu.be/N74dCyHbGUg', 'https://youtu.be/pmfyMjEDRIo', 'https://youtu.be/Zf4xizv3xug', 'https://youtu.be/_ADePK8Kpbw'];
            var rand = myArray[Math.floor(Math.random() * myArray.length)];
            $("#youtubelink").val(rand)

        });


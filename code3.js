gdjs.pauseCode = {};
gdjs.pauseCode.GDPauseObjects1= [];
gdjs.pauseCode.GDPauseObjects2= [];
gdjs.pauseCode.GDPauseObjects3= [];
gdjs.pauseCode.GDPauseObjects4= [];
gdjs.pauseCode.GDenter_95buttonObjects1= [];
gdjs.pauseCode.GDenter_95buttonObjects2= [];
gdjs.pauseCode.GDenter_95buttonObjects3= [];
gdjs.pauseCode.GDenter_95buttonObjects4= [];
gdjs.pauseCode.GDplayerObjects1= [];
gdjs.pauseCode.GDplayerObjects2= [];
gdjs.pauseCode.GDplayerObjects3= [];
gdjs.pauseCode.GDplayerObjects4= [];
gdjs.pauseCode.GDZvukObjects1= [];
gdjs.pauseCode.GDZvukObjects2= [];
gdjs.pauseCode.GDZvukObjects3= [];
gdjs.pauseCode.GDZvukObjects4= [];
gdjs.pauseCode.GDexitObjects1= [];
gdjs.pauseCode.GDexitObjects2= [];
gdjs.pauseCode.GDexitObjects3= [];
gdjs.pauseCode.GDexitObjects4= [];

gdjs.pauseCode.conditionTrue_0 = {val:false};
gdjs.pauseCode.condition0IsTrue_0 = {val:false};
gdjs.pauseCode.condition1IsTrue_0 = {val:false};
gdjs.pauseCode.condition2IsTrue_0 = {val:false};
gdjs.pauseCode.conditionTrue_1 = {val:false};
gdjs.pauseCode.condition0IsTrue_1 = {val:false};
gdjs.pauseCode.condition1IsTrue_1 = {val:false};
gdjs.pauseCode.condition2IsTrue_1 = {val:false};


gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDenter_9595buttonObjects2Objects = Hashtable.newFrom({"enter_button": gdjs.pauseCode.GDenter_95buttonObjects2});
gdjs.pauseCode.eventsList0 = function(runtimeScene) {

{


gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Pause");
}}

}


};gdjs.pauseCode.eventsList1 = function(runtimeScene) {

{


gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Pause");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enter_button"), gdjs.pauseCode.GDenter_95buttonObjects2);

gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDenter_9595buttonObjects2Objects, runtimeScene, true, false);
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.pauseCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
}

}


};gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDPauseObjects2Objects = Hashtable.newFrom({"Pause": gdjs.pauseCode.GDPauseObjects2});
gdjs.pauseCode.eventsList2 = function(runtimeScene) {

{


gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Pause");
}}

}


};gdjs.pauseCode.eventsList3 = function(runtimeScene) {

{


gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Pause");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pause"), gdjs.pauseCode.GDPauseObjects2);

gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDPauseObjects2Objects, runtimeScene, true, false);
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.pauseCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


{
}

}


};gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDexitObjects2Objects = Hashtable.newFrom({"exit": gdjs.pauseCode.GDexitObjects2});
gdjs.pauseCode.eventsList4 = function(runtimeScene) {

{


gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


};gdjs.pauseCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("exit"), gdjs.pauseCode.GDexitObjects2);

gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDexitObjects2Objects, runtimeScene, true, false);
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.pauseCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


{
}

}


};gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDZvukObjects2Objects = Hashtable.newFrom({"Zvuk": gdjs.pauseCode.GDZvukObjects2});
gdjs.pauseCode.eventsList6 = function(runtimeScene) {

{


gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Mute").add(1);
}}

}


{

/* Reuse gdjs.pauseCode.GDZvukObjects2 */

gdjs.pauseCode.condition0IsTrue_0.val = false;
gdjs.pauseCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.pauseCode.GDZvukObjects2.length;i<l;++i) {
    if ( gdjs.pauseCode.GDZvukObjects2[i].isVisible() ) {
        gdjs.pauseCode.condition0IsTrue_0.val = true;
        gdjs.pauseCode.GDZvukObjects2[k] = gdjs.pauseCode.GDZvukObjects2[i];
        ++k;
    }
}
gdjs.pauseCode.GDZvukObjects2.length = k;}if ( gdjs.pauseCode.condition0IsTrue_0.val ) {
{
{gdjs.pauseCode.conditionTrue_1 = gdjs.pauseCode.condition1IsTrue_0;
gdjs.pauseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9731372);
}
}}
if (gdjs.pauseCode.condition1IsTrue_0.val) {
}

}


};gdjs.pauseCode.eventsList7 = function(runtimeScene) {

{


gdjs.pauseCode.condition0IsTrue_0.val = false;
gdjs.pauseCode.condition1IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Mute")) == 0;
}if ( gdjs.pauseCode.condition0IsTrue_0.val ) {
{
{gdjs.pauseCode.conditionTrue_1 = gdjs.pauseCode.condition1IsTrue_0;
gdjs.pauseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9732204);
}
}}
if (gdjs.pauseCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Zvuk"), gdjs.pauseCode.GDZvukObjects2);
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 50);
}{for(var i = 0, len = gdjs.pauseCode.GDZvukObjects2.length ;i < len;++i) {
    gdjs.pauseCode.GDZvukObjects2[i].setAnimation(0);
}
}}

}


{


gdjs.pauseCode.condition0IsTrue_0.val = false;
gdjs.pauseCode.condition1IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Mute")) == 1;
}if ( gdjs.pauseCode.condition0IsTrue_0.val ) {
{
{gdjs.pauseCode.conditionTrue_1 = gdjs.pauseCode.condition1IsTrue_0;
gdjs.pauseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9733268);
}
}}
if (gdjs.pauseCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Zvuk"), gdjs.pauseCode.GDZvukObjects2);
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}{for(var i = 0, len = gdjs.pauseCode.GDZvukObjects2.length ;i < len;++i) {
    gdjs.pauseCode.GDZvukObjects2[i].setAnimation(1);
}
}}

}


{


gdjs.pauseCode.condition0IsTrue_0.val = false;
gdjs.pauseCode.condition1IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Mute")) == 2;
}if ( gdjs.pauseCode.condition0IsTrue_0.val ) {
{
{gdjs.pauseCode.conditionTrue_1 = gdjs.pauseCode.condition1IsTrue_0;
gdjs.pauseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9724388);
}
}}
if (gdjs.pauseCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Mute").setNumber(0);
}}

}


{


gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
}

}


};gdjs.pauseCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Zvuk"), gdjs.pauseCode.GDZvukObjects2);

gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDZvukObjects2Objects, runtimeScene, true, false);
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.pauseCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


{

{ //Subevents
gdjs.pauseCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.pauseCode.userFunc0x1019f98 = function(runtimeScene) {
"use strict";
function handleVisibilityChange() {
    if (document.hidden) {
  runtimeScene.getSoundManager().setGlobalVolume(0);
  sound && sound.pause();
    
  } else {
    runtimeScene.getSoundManager().setGlobalVolume(50);
    if (sound && !sound.playing()) sound.play();
    }
}

document.addEventListener("visibilitychange", handleVisibilityChange, false);
};
gdjs.pauseCode.eventsList9 = function(runtimeScene) {

{


gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Pause");
}}

}


{


gdjs.pauseCode.condition0IsTrue_0.val = false;
gdjs.pauseCode.condition1IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if ( gdjs.pauseCode.condition0IsTrue_0.val ) {
{
gdjs.pauseCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Pause") > 0.3;
}}
if (gdjs.pauseCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Pause");
}}

}


{


gdjs.pauseCode.eventsList1(runtimeScene);
}


{


gdjs.pauseCode.eventsList3(runtimeScene);
}


{


gdjs.pauseCode.eventsList5(runtimeScene);
}


{


gdjs.pauseCode.eventsList8(runtimeScene);
}


{


gdjs.pauseCode.userFunc0x1019f98(runtimeScene);

}


{


{
}

}


};

gdjs.pauseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.pauseCode.GDPauseObjects1.length = 0;
gdjs.pauseCode.GDPauseObjects2.length = 0;
gdjs.pauseCode.GDPauseObjects3.length = 0;
gdjs.pauseCode.GDPauseObjects4.length = 0;
gdjs.pauseCode.GDenter_95buttonObjects1.length = 0;
gdjs.pauseCode.GDenter_95buttonObjects2.length = 0;
gdjs.pauseCode.GDenter_95buttonObjects3.length = 0;
gdjs.pauseCode.GDenter_95buttonObjects4.length = 0;
gdjs.pauseCode.GDplayerObjects1.length = 0;
gdjs.pauseCode.GDplayerObjects2.length = 0;
gdjs.pauseCode.GDplayerObjects3.length = 0;
gdjs.pauseCode.GDplayerObjects4.length = 0;
gdjs.pauseCode.GDZvukObjects1.length = 0;
gdjs.pauseCode.GDZvukObjects2.length = 0;
gdjs.pauseCode.GDZvukObjects3.length = 0;
gdjs.pauseCode.GDZvukObjects4.length = 0;
gdjs.pauseCode.GDexitObjects1.length = 0;
gdjs.pauseCode.GDexitObjects2.length = 0;
gdjs.pauseCode.GDexitObjects3.length = 0;
gdjs.pauseCode.GDexitObjects4.length = 0;

gdjs.pauseCode.eventsList9(runtimeScene);

return;

}

gdjs['pauseCode'] = gdjs.pauseCode;

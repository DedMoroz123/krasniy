gdjs.Main_95engCode = {};
gdjs.Main_95engCode.GDpl_95menuObjects1= [];
gdjs.Main_95engCode.GDpl_95menuObjects2= [];
gdjs.Main_95engCode.GDpl_95menuObjects3= [];
gdjs.Main_95engCode.GDpl_95menuObjects4= [];
gdjs.Main_95engCode.GDnachat_95ugru_95buttonObjects1= [];
gdjs.Main_95engCode.GDnachat_95ugru_95buttonObjects2= [];
gdjs.Main_95engCode.GDnachat_95ugru_95buttonObjects3= [];
gdjs.Main_95engCode.GDnachat_95ugru_95buttonObjects4= [];
gdjs.Main_95engCode.GDZvukObjects1= [];
gdjs.Main_95engCode.GDZvukObjects2= [];
gdjs.Main_95engCode.GDZvukObjects3= [];
gdjs.Main_95engCode.GDZvukObjects4= [];
gdjs.Main_95engCode.GDENGObjects1= [];
gdjs.Main_95engCode.GDENGObjects2= [];
gdjs.Main_95engCode.GDENGObjects3= [];
gdjs.Main_95engCode.GDENGObjects4= [];
gdjs.Main_95engCode.GDrusObjects1= [];
gdjs.Main_95engCode.GDrusObjects2= [];
gdjs.Main_95engCode.GDrusObjects3= [];
gdjs.Main_95engCode.GDrusObjects4= [];

gdjs.Main_95engCode.conditionTrue_0 = {val:false};
gdjs.Main_95engCode.condition0IsTrue_0 = {val:false};
gdjs.Main_95engCode.condition1IsTrue_0 = {val:false};
gdjs.Main_95engCode.condition2IsTrue_0 = {val:false};
gdjs.Main_95engCode.conditionTrue_1 = {val:false};
gdjs.Main_95engCode.condition0IsTrue_1 = {val:false};
gdjs.Main_95engCode.condition1IsTrue_1 = {val:false};
gdjs.Main_95engCode.condition2IsTrue_1 = {val:false};


gdjs.Main_95engCode.mapOfGDgdjs_46Main_9595engCode_46GDZvukObjects2Objects = Hashtable.newFrom({"Zvuk": gdjs.Main_95engCode.GDZvukObjects2});
gdjs.Main_95engCode.eventsList0 = function(runtimeScene) {

{


gdjs.Main_95engCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95engCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Main_95engCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Mute").add(1);
}}

}


{

/* Reuse gdjs.Main_95engCode.GDZvukObjects2 */

gdjs.Main_95engCode.condition0IsTrue_0.val = false;
gdjs.Main_95engCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_95engCode.GDZvukObjects2.length;i<l;++i) {
    if ( gdjs.Main_95engCode.GDZvukObjects2[i].isVisible() ) {
        gdjs.Main_95engCode.condition0IsTrue_0.val = true;
        gdjs.Main_95engCode.GDZvukObjects2[k] = gdjs.Main_95engCode.GDZvukObjects2[i];
        ++k;
    }
}
gdjs.Main_95engCode.GDZvukObjects2.length = k;}if ( gdjs.Main_95engCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_95engCode.conditionTrue_1 = gdjs.Main_95engCode.condition1IsTrue_0;
gdjs.Main_95engCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9657876);
}
}}
if (gdjs.Main_95engCode.condition1IsTrue_0.val) {
}

}


};gdjs.Main_95engCode.eventsList1 = function(runtimeScene) {

{


gdjs.Main_95engCode.condition0IsTrue_0.val = false;
gdjs.Main_95engCode.condition1IsTrue_0.val = false;
{
gdjs.Main_95engCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Mute")) == 0;
}if ( gdjs.Main_95engCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_95engCode.conditionTrue_1 = gdjs.Main_95engCode.condition1IsTrue_0;
gdjs.Main_95engCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9658708);
}
}}
if (gdjs.Main_95engCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Zvuk"), gdjs.Main_95engCode.GDZvukObjects2);
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 50);
}{for(var i = 0, len = gdjs.Main_95engCode.GDZvukObjects2.length ;i < len;++i) {
    gdjs.Main_95engCode.GDZvukObjects2[i].setAnimation(0);
}
}}

}


{


gdjs.Main_95engCode.condition0IsTrue_0.val = false;
gdjs.Main_95engCode.condition1IsTrue_0.val = false;
{
gdjs.Main_95engCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Mute")) == 1;
}if ( gdjs.Main_95engCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_95engCode.conditionTrue_1 = gdjs.Main_95engCode.condition1IsTrue_0;
gdjs.Main_95engCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9659772);
}
}}
if (gdjs.Main_95engCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Zvuk"), gdjs.Main_95engCode.GDZvukObjects2);
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}{for(var i = 0, len = gdjs.Main_95engCode.GDZvukObjects2.length ;i < len;++i) {
    gdjs.Main_95engCode.GDZvukObjects2[i].setAnimation(1);
}
}}

}


{


gdjs.Main_95engCode.condition0IsTrue_0.val = false;
gdjs.Main_95engCode.condition1IsTrue_0.val = false;
{
gdjs.Main_95engCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Mute")) == 2;
}if ( gdjs.Main_95engCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_95engCode.conditionTrue_1 = gdjs.Main_95engCode.condition1IsTrue_0;
gdjs.Main_95engCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9660860);
}
}}
if (gdjs.Main_95engCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Mute").setNumber(0);
}}

}


{


gdjs.Main_95engCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95engCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_95engCode.condition0IsTrue_0.val) {
}

}


};gdjs.Main_95engCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Zvuk"), gdjs.Main_95engCode.GDZvukObjects2);

gdjs.Main_95engCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95engCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_95engCode.mapOfGDgdjs_46Main_9595engCode_46GDZvukObjects2Objects, runtimeScene, true, false);
}if (gdjs.Main_95engCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.Main_95engCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{

{ //Subevents
gdjs.Main_95engCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Main_95engCode.eventsList3 = function(runtimeScene) {

{


gdjs.Main_95engCode.condition0IsTrue_0.val = false;
{
/* Unknown instruction - skipped. */}if (gdjs.Main_95engCode.condition0IsTrue_0.val) {
{/* Unknown instruction - skipped. */}}

}


};gdjs.Main_95engCode.eventsList4 = function(runtimeScene) {

{


gdjs.Main_95engCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95engCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_95engCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Main_95engCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_95engCode.condition0IsTrue_0.val = false;
gdjs.Main_95engCode.condition1IsTrue_0.val = false;
{
/* Unknown instruction - skipped. */}if ( gdjs.Main_95engCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_95engCode.conditionTrue_1 = gdjs.Main_95engCode.condition1IsTrue_0;
gdjs.Main_95engCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9663820);
}
}}
if (gdjs.Main_95engCode.condition1IsTrue_0.val) {
{/* Unknown instruction - skipped. */}}

}


{


gdjs.Main_95engCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95engCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_95engCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


};gdjs.Main_95engCode.mapOfGDgdjs_46Main_9595engCode_46GDnachat_9595ugru_9595buttonObjects2Objects = Hashtable.newFrom({"nachat_ugru_button": gdjs.Main_95engCode.GDnachat_95ugru_95buttonObjects2});
gdjs.Main_95engCode.eventsList5 = function(runtimeScene) {

{


gdjs.Main_95engCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95engCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Main_95engCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ViborLvl", false);
}}

}


};gdjs.Main_95engCode.mapOfGDgdjs_46Main_9595engCode_46GDpl_9595menuObjects2Objects = Hashtable.newFrom({"pl_menu": gdjs.Main_95engCode.GDpl_95menuObjects2});
gdjs.Main_95engCode.eventsList6 = function(runtimeScene) {

{


gdjs.Main_95engCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95engCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Main_95engCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ViborLvl", false);
}}

}


};gdjs.Main_95engCode.mapOfGDgdjs_46Main_9595engCode_46GDrusObjects2Objects = Hashtable.newFrom({"rus": gdjs.Main_95engCode.GDrusObjects2});
gdjs.Main_95engCode.eventsList7 = function(runtimeScene) {

{


gdjs.Main_95engCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95engCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Main_95engCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


};gdjs.Main_95engCode.mapOfGDgdjs_46Main_9595engCode_46GDENGObjects2Objects = Hashtable.newFrom({"ENG": gdjs.Main_95engCode.GDENGObjects2});
gdjs.Main_95engCode.eventsList8 = function(runtimeScene) {

{


gdjs.Main_95engCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95engCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Main_95engCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main_eng", false);
}}

}


};gdjs.Main_95engCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("nachat_ugru_button"), gdjs.Main_95engCode.GDnachat_95ugru_95buttonObjects2);

gdjs.Main_95engCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95engCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_95engCode.mapOfGDgdjs_46Main_9595engCode_46GDnachat_9595ugru_9595buttonObjects2Objects, runtimeScene, true, false);
}if (gdjs.Main_95engCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.Main_95engCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("pl_menu"), gdjs.Main_95engCode.GDpl_95menuObjects2);

gdjs.Main_95engCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95engCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_95engCode.mapOfGDgdjs_46Main_9595engCode_46GDpl_9595menuObjects2Objects, runtimeScene, true, false);
}if (gdjs.Main_95engCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.Main_95engCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("rus"), gdjs.Main_95engCode.GDrusObjects2);

gdjs.Main_95engCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95engCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_95engCode.mapOfGDgdjs_46Main_9595engCode_46GDrusObjects2Objects, runtimeScene, true, false);
}if (gdjs.Main_95engCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.Main_95engCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ENG"), gdjs.Main_95engCode.GDENGObjects2);

gdjs.Main_95engCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95engCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_95engCode.mapOfGDgdjs_46Main_9595engCode_46GDENGObjects2Objects, runtimeScene, true, false);
}if (gdjs.Main_95engCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.Main_95engCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


{
}

}


};gdjs.Main_95engCode.eventsList10 = function(runtimeScene) {

{


gdjs.Main_95engCode.eventsList2(runtimeScene);
}


{


gdjs.Main_95engCode.eventsList4(runtimeScene);
}


{


{
}

}


{


gdjs.Main_95engCode.eventsList9(runtimeScene);
}


};

gdjs.Main_95engCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_95engCode.GDpl_95menuObjects1.length = 0;
gdjs.Main_95engCode.GDpl_95menuObjects2.length = 0;
gdjs.Main_95engCode.GDpl_95menuObjects3.length = 0;
gdjs.Main_95engCode.GDpl_95menuObjects4.length = 0;
gdjs.Main_95engCode.GDnachat_95ugru_95buttonObjects1.length = 0;
gdjs.Main_95engCode.GDnachat_95ugru_95buttonObjects2.length = 0;
gdjs.Main_95engCode.GDnachat_95ugru_95buttonObjects3.length = 0;
gdjs.Main_95engCode.GDnachat_95ugru_95buttonObjects4.length = 0;
gdjs.Main_95engCode.GDZvukObjects1.length = 0;
gdjs.Main_95engCode.GDZvukObjects2.length = 0;
gdjs.Main_95engCode.GDZvukObjects3.length = 0;
gdjs.Main_95engCode.GDZvukObjects4.length = 0;
gdjs.Main_95engCode.GDENGObjects1.length = 0;
gdjs.Main_95engCode.GDENGObjects2.length = 0;
gdjs.Main_95engCode.GDENGObjects3.length = 0;
gdjs.Main_95engCode.GDENGObjects4.length = 0;
gdjs.Main_95engCode.GDrusObjects1.length = 0;
gdjs.Main_95engCode.GDrusObjects2.length = 0;
gdjs.Main_95engCode.GDrusObjects3.length = 0;
gdjs.Main_95engCode.GDrusObjects4.length = 0;

gdjs.Main_95engCode.eventsList10(runtimeScene);

return;

}

gdjs['Main_95engCode'] = gdjs.Main_95engCode;

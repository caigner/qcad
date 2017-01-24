// Auto generated by Testing Dashboard
// File        : scripts/Draw/Circle/Circle2TP/Tests/Circle2TPTest01.js
// Timestamp   : 2017-01-13 11:11:28
// Description : 

include('scripts/Pro/Developer/TestingDashboard/TdbTest.js');

function Circle2TPTest01() {
    TdbTest.call(this, 'scripts/Draw/Circle/Circle2TP/Tests/Circle2TPTest01.js');
}

Circle2TPTest01.prototype = new TdbTest();

Circle2TPTest01.prototype.test00 = function() {
    qDebug('running Circle2TPTest01.test00()...');
    this.setUp();
    TdbTest.clickOnWidget('MainWindow::CadQToolBar::CadToolBar::MainToolsPanel::LineToolsPanelButton');
    TdbTest.clickOnWidget('MainWindow::CadQToolBar::CadToolBar::LineToolsPanel::Line2PButton');
    this.setZoom(10, new RVector(5, 5, 0, true));
    var p = new RVector(9.9, 19.7);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(10, new RVector(5, 5, 0, true));
    var p = new RVector(19.8, 10);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(10, new RVector(5, 5, 0, true));
    var p = new RVector(39.9, 20);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(31.8, 28.5);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(29.8, 28.1);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(26.2, 27.7);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    TdbTest.clickOnWidget('MainWindow::CadQToolBar::CadToolBar::MainToolsPanel::CircleToolsPanelButton');
    TdbTest.clickOnWidget('MainWindow::CadQToolBar::CadToolBar::CircleToolsPanel::Circle2TPButton');
    this.setZoom(10, new RVector(5, 5, 0, true));
    var p = new RVector(14.5, 15.8);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(10, new RVector(5, 5, 0, true));
    var p = new RVector(27.4, 14);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(10, new RVector(5, 5, 0, true));
    var p = new RVector(40.1, 20.1);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(10, new RVector(5, 5, 0, true));
    var p = new RVector(22.2, 16.8);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(28.6, 27.3);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(26.3, 28.3);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    this.verifyDrawing('Circle2TPTest01_000.dxf');
    this.tearDown();
    qDebug('finished Circle2TPTest01.test00()');
};

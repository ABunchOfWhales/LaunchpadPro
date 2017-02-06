// Written by Jürgen Moßgraber - mossgrabers.de
// (c) 2014-2017
// Licensed under LGPLv3 - http://www.gnu.org/licenses/lgpl-3.0.txt

function SequencerView (model)
{
    AbstractNoteSequencerView.call (this, model);
    this.cursorColor = LAUNCHPAD_COLOR_SKY;
    this.modeColor = LAUNCHPAD_COLOR_SKY;
}
SequencerView.prototype = new AbstractNoteSequencerView ();

//=============================================================================
// Optionless.js
//=============================================================================

/*:
 * @plugindesc Remove options from the user
 * @author ocean pollen
 *
 * @help This plugin does not provide plugin commands.
 */

(function() {
  Window_TitleCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.newGame, 'newGame')
  }

  Window_MenuCommand.prototype.addOptionsCommand = function() {}
})()

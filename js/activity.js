$(document).ready(function() {
    // Function to handle cell click events
    function handleCellClick() {
      // Check if the cell is selectable (not "Not Available" and not a heading cell)
      if (!$(this).hasClass('not-available') && !$(this).hasClass('heading-cell')) {
        $(this).toggleClass('selected'); // Toggle the 'selected' class on the cell
      }
    }
  
    // Attach a click event handler to all the table cells except heading cells
    $('table tbody td').on('click', handleCellClick);
  
    // Prevent text selection when clicking on cells
    $('table').on('selectstart', function() {
      return false;
    });
  });
exports = this;
exports.ZBJ = exports.ZBJ || {};
exports.ZBJ.CalendarOperation = (function() {
  
  function CalendarOperation() {
    CalendarOperation._formReset();
    CalendarOperation._initForm();
    CalendarOperation._initDate();
    CalendarOperation._isBatchSet();
    CalendarOperation._checkAll();
    CalendarOperation._setBtnSubmit();
    CalendarOperation._prevMonth();
    CalendarOperation._nextMonth();
  }

  CalendarOperation._initDate = function() {
    var month, nextMonth, prevMonth, today, year;
    today = new Date();
    year = today.getFullYear();
    month = today.getMonth() + 1;
    prevMonth = month - 1;
    nextMonth = month + 1;
    return CalendarOperation._initPage(year, month, prevMonth, nextMonth);
  };

  CalendarOperation._initPage = function(year, month, prevMonth, nextMonth, json) {
    var calendarHtml;
    $('#calendarYear').text(year);
    if (month < 10) {
      month = '0' + month;
    }
    $('#currentMonth').text(month);
    $('#prevMonth').text(prevMonth);
    $('#nextMonth').text(nextMonth);
    calendarHtml = CalendarOperation._setCalendar(year, month, json);
    return $('#calendarContainer').html(calendarHtml);
  };

  CalendarOperation._lastWek = function(monthDay, monthFirstDay) {
    var day, restDay;
    day = monthDay - (7 - monthFirstDay);
    restDay = day % 7;
    if (restDay === 0) {
      restDay = 6;
    } else {
      restDay = restDay - 1;
    }
    return restDay;
  };

  CalendarOperation._setCalendar = function(year, month, json) {
    var calendar, day, dayVal, daynumber, firstnumber, i, j, k, l, lastnumber, m, monthAllDay, n, nowDay, nowDayDate, nowDayMonth, number, o, p, q, ref, ref1, ref2, ref3, ref4, tdId, weeknumber;
    nowDayMonth = new Date().getMonth() + 1;
    if (nowDayMonth < 10) {
      nowDayMonth = '0' + nowDayMonth;
    } else {
      nowDayMonth = nowDayMonth;
    }
    nowDayDate = new Date().getDate();
    if (nowDayDate < 10) {
      nowDayDate = '0' + nowDayDate;
    } else {
      nowDayDate = nowDayDate;
    }
    nowDay = new Date().getFullYear() + '-' + nowDayMonth + '-' + nowDayDate;
    monthAllDay = new Date(year, month, 0);
    daynumber = monthAllDay.getDate();
    firstnumber = new Date(year, month - 1, 1).getDay();
    lastnumber = CalendarOperation._lastWek(daynumber, firstnumber);
    if (firstnumber === 0) {
      firstnumber = 7;
    }
    if (lastnumber === 6) {
      lastnumber = -1;
    }
    weeknumber = Math.ceil((daynumber - (7 - firstnumber) - (lastnumber + 1)) / 7);
    day = 1;
    calendar = '';
    calendar += "<tr>";
    for (i = j = 1, ref = firstnumber; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
      calendar += '<td></td>';
    }
    if (firstnumber > 6) {
      calendar += '</tr>';
    } else {
      for (i = l = ref1 = firstnumber; ref1 <= 6 ? l <= 6 : l >= 6; i = ref1 <= 6 ? ++l : --l) {
        if (day < 10) {
          dayVal = '0' + day;
        } else {
          dayVal = day;
        }
        tdId = year + '-' + month + '-' + dayVal;
        if (new Date(tdId) > new Date(nowDay)) {
          calendar += '<td class="calendar-order calendar-no-data" id=\"' + tdId + '\"><p class=\"calendar-day\">' + day + '</p></td>';
        } else {
          calendar += '<td class="calendar-no-order calendar-no-data" id=\"' + tdId + '\"><p class=\"calendar-day\">' + day + '</p></td>';
        }
        day++;
      }
      calendar += '</tr>';
    }
    number = 0;
    for (i = m = 1, ref2 = weeknumber; 1 <= ref2 ? m <= ref2 : m >= ref2; i = 1 <= ref2 ? ++m : --m) {
      calendar += '<tr>';
      for (k = n = 1; n <= 7; k = ++n) {
        if (day < 10) {
          dayVal = '0' + day;
        } else {
          dayVal = day;
        }
        tdId = year + '-' + month + '-' + dayVal;
        if (new Date(tdId) > new Date(nowDay)) {
          calendar += '<td class="calendar-order calendar-no-data" id=\"' + tdId + '\"><p class=\"calendar-day\">' + day + '</p></td>';
        } else {
          calendar += '<td class="calendar-no-order calendar-no-data" id=\"' + tdId + '\"><p class=\"calendar-day\">' + day + '</p></td>';
        }
        day++;
      }
      calendar += '</tr>';
      number++;
    }
    calendar += '<tr>';
    if (lastnumber < 0) {
      for (i = o = 0; o <= 6; i = ++o) {
        calendar += '<td></td>';
      }
      calendar += '</tr>';
    } else {
      for (i = p = 0, ref3 = lastnumber; 0 <= ref3 ? p <= ref3 : p >= ref3; i = 0 <= ref3 ? ++p : --p) {
        if (day < 10) {
          dayVal = '0' + day;
        } else {
          dayVal = day;
        }
        tdId = year + '-' + month + '-' + dayVal;
        if (new Date(tdId) > new Date(nowDay)) {
          calendar += '<td class="calendar-order calendar-no-data" id=\"' + tdId + '\"><p class=\"calendar-day\">' + day + '</p></td>';
        } else {
          calendar += '<td class="calendar-no-order calendar-no-data" id=\"' + tdId + '\"><p class=\"calendar-day\">' + day + '</p></td>';
        }
        day++;
      }
      for (i = q = ref4 = lastnumber; ref4 <= 5 ? q <= 5 : q >= 5; i = ref4 <= 5 ? ++q : --q) {
        calendar += '<td></td>';
      }
      calendar += '</tr>';
    }
    if (number === 3) {
      calendar += '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>';
    }
    return calendar;
  };

  CalendarOperation._monthDiff = function(to) {
    var dateFrom, dateTo, from, monthDiff;
    from = new Date().getFullYear() + '-' + (parseInt(new Date().getMonth()) + 1);
    dateFrom = from.split('-');
    dateTo = to.split('-');
    monthDiff = 0;
    if ((parseInt(dateTo[0]) - parseInt(dateFrom[0])) > 0) {
      monthDiff = (parseInt(dateTo[0]) - parseInt(dateFrom[0])) * 12 + parseInt(dateTo[1]) - parseInt(dateFrom[1]);
    } else {
      monthDiff = -((parseInt(dateFrom[0]) - parseInt(dateTo[0])) * 12 + parseInt(dateFrom[1]) - parseInt(dateTo[1]));
    }
    return monthDiff;
  };

  CalendarOperation._prevMonth = function() {
    return $('.calendar-prev').on('click', function(e) {
      var ajaxVal, from, month, monthDiff, nextMonth, prevMonth, url, year;
      year = parseInt($('#calendarYear').text());
      month = parseInt($('#currentMonth').text() - 1);
      if (month === 1) {
        prevMonth = 12;
        nextMonth = 2;
      } else if (month === 0) {
        month = 12;
        year = year - 1;
        prevMonth = month - 1;
        nextMonth = 1;
      } else {
        prevMonth = month - 1;
        nextMonth = month + 1;
      }
      from = year + '-' + month;
      monthDiff = CalendarOperation._monthDiff(from);
      if (monthDiff > 12) {
        return MOW.alert('warning', '只能选择12个月内的日期');
      } else {
        CalendarOperation._initPage(year, month, prevMonth, nextMonth);
        if (month < 10) {
          month = '0' + month;
        } else {
          month = month;
        }
        ajaxVal = year + '-' + month + '-' + '01';
        url = $('.rooms-active').find('.room-avails-btn').data('url');
        return $.ajax(url, {
          type: 'get',
          dataType: 'json',
          data: {
            data_month: ajaxVal
          },
          error: function(jqXHR, textStatus, errorThrown) {
            return console.log(errorThrown);
          },
          success: function(data, textStatus, jqXHR) {
            return CalendarOperation._dataInject(data);
          }
        });
      }
    });
  };

  CalendarOperation._nextMonth = function() {
    return $('.calendar-next').on('click', function(e) {
      var ajaxVal, from, month, monthDiff, nextMonth, prevMonth, url, year;
      year = parseInt($('#calendarYear').text());
      month = parseInt($('#currentMonth').text()) + 1;
      if (month === 12) {
        nextMonth = 1;
        prevMonth = 11;
      } else if (month === 13) {
        month = 1;
        year = year + 1;
        prevMonth = 12;
        nextMonth = 2;
      } else {
        prevMonth = month - 1;
        nextMonth = month + 1;
      }
      from = year + '-' + month;
      monthDiff = CalendarOperation._monthDiff(from);
      if (monthDiff > 12) {
        return MOW.alert('warning', '只能选择12个月内的日期');
      } else {
        CalendarOperation._initPage(year, month, prevMonth, nextMonth);
        if (month < 10) {
          month = '0' + month;
        } else {
          month = month;
        }
        ajaxVal = year + '-' + month + '-' + '01';
        url = $('.rooms-active').find('.room-avails-btn').data('url');
        return $.ajax(url, {
          type: 'get',
          dataType: 'json',
          data: {
            data_month: ajaxVal
          },
          error: function(jqXHR, textStatus, errorThrown) {
            return console.log(errorThrown);
          },
          success: function(data, textStatus, jqXHR) {
            return CalendarOperation._dataInject(data);
          }
        });
      }
    });
  };

  CalendarOperation._dataInject = function(data) {
    var day, idx, j, len, noOrderTemplate, noStatusRender, nowDay, nowDayDate, nowDayMonth, orderTemplate, statusRender, unOrderTemplate, unStatusRender;
    orderTemplate = $('#calendarOrder').html();
    Mustache.parse(orderTemplate);
    unOrderTemplate = $('#calendarUnOrder').html();
    Mustache.parse(unOrderTemplate);
    noOrderTemplate = $('#calendarNoOrder').html();
    Mustache.parse(noOrderTemplate);
    nowDayMonth = new Date().getMonth() + 1;
    if (nowDayMonth < 10) {
      nowDayMonth = '0' + nowDayMonth;
    } else {
      nowDayMonth = nowDayMonth;
    }
    nowDayDate = new Date().getDate();
    if (nowDayDate < 10) {
      nowDayDate = '0' + nowDayDate;
    } else {
      nowDayDate = nowDayDate;
    }
    nowDay = new Date().getFullYear() + '-' + nowDayMonth + '-' + nowDayDate;
    for (j = 0, len = data.length; j < len; j++) {
      idx = data[j];
      if (new Date(idx.date) < new Date(nowDay)) {
        day = parseInt(idx.date.split('-')[2]);
        noStatusRender = Mustache.render(noOrderTemplate, {
          day: day,
          data: idx
        });
        $('#' + idx.date).replaceWith(noStatusRender);
      } else {
        if (idx.status === 'status_available') {
          day = parseInt(idx.date.split('-')[2]);
          statusRender = Mustache.render(orderTemplate, {
            day: day,
            data: idx
          });
          $('#' + idx.date).replaceWith(statusRender);
        } else {
          day = parseInt(idx.date.split('-')[2]);
          unStatusRender = Mustache.render(unOrderTemplate, {
            day: day,
            data: idx
          });
          $('#' + idx.date).replaceWith(unStatusRender);
        }
      }
    }
    return $('.calendar-order').each(function(idx) {
      var breakfastVal, storeStatus;
      breakfastVal = $(this).find('.calendar-info-breakfask').text();
      if (breakfastVal === 'true') {
        $(this).find('.calendar-info-breakfask').text('含早');
      } else {
        $(this).find('.calendar-info-breakfask').text('不含早');
      }
      storeStatus = $(this).data('store-status');
      if (storeStatus === 'inventory_confirm') {
        return $(this).find('.calendar-store-status').hide();
      } else {
        return $(this).find('.calendar-store-status').show();
      }
    });
  };

  CalendarOperation._isBatchSet = function() {
    return $('.calendar-wrapper').on('click', '#batchSet', function(e) {
      if ($(this).text() === '批量设置') {
        $('#checkAll').css('display', 'inline-block');
        $(this).text('取消批量设置');
        $(this).data('value', '1');
        return $('#stroeNumber').parents('.form-group').show();
      } else {
        $(this).text('批量设置');
        $('#checkAll').css('display', 'none');
        $(this).data('value', '0');
        $('.calendar-order').each(function(idx) {
          return $(this).removeClass('calendar-order-select');
        });
        return $('.btn-reset').trigger('click');
      }
    });
  };

  CalendarOperation._checkAll = function() {
    return $('.calendar-wrapper').on('click', '#checkAll', function(e) {
      $('.btn-reset').trigger('click');
      if ($(this).text() === '全选') {
        $(this).text('取消全选');
        $('.calendar-order').each(function(idx) {
          return $(this).addClass('calendar-order-select');
        });
        return $('.calendar-no-order').each(function(idx) {
          return $(this).removeClass('calendar-order-select');
        });
      } else {
        $(this).text('全选');
        return $('.calendar-order').each(function(idx) {
          return $(this).removeClass('calendar-order-select');
        });
      }
    });
  };

  CalendarOperation._initForm = function() {
    $('.calendar-wrapper').on('click', '.calendar-order', function(e) {
      var breakfast, orderNumber, orderStatus, storeNumber, storeStatus, supplierPrice;
      orderStatus = $(this).data('order-status');
      storeStatus = $(this).data('store-status');
      orderNumber = $(this).data('order-number');
      storeNumber = $(this).data('store-number');
      breakfast = $(this).data('breakfast');
      supplierPrice = $(this).data('supplier-price');
      if (orderStatus === 'status_available') {
        $("input[name='orderStatus'][value=1]").prop("checked", true);
      } else {
        $("input[name='orderStatus'][value=0]").prop("checked", true);
      }
      $('#orderPrice input').val(supplierPrice);
      if (storeStatus === 'inventory_immediate') {
        $("input[name='storeStatus'][value=1]").prop("checked", true);
      } else {
        $("input[name='storeStatus'][value=2]").prop("checked", true);
      }
      $('#stroeNumber input').val(storeNumber);
      if (breakfast) {
        $("input[name='hasBreakfast'][value=1]").prop("checked", true);
      } else {
        $("input[name='hasBreakfast'][value=0]").prop("checked", true);
      }
      if ($(this).hasClass('calendar-no-order')) {
        $('.calendar-order').each(function() {
          return $(this).removeClass('calendar-order-select');
        });
        $("input[name='orderStatus'][value=0]").prop("disabled", true);
        $("input[name='orderStatus'][value=1]").prop("disabled", true);
        $('#orderPrice input').prop("disabled", true);
        $("input[name='storeStatus'][value=1]").prop("disabled", true);
        $("input[name='storeStatus'][value=2]").prop("disabled", true);
        $('#stroeNumber input').prop("disabled", true);
        $("input[name='hasBreakfast'][value=1]").prop("disabled", true);
        $("input[name='hasBreakfast'][value=0]").prop("disabled", true);
        $('#setBtnSubmit').prop("disabled", true);
        return $('#setBtnReset').prop("disabled", true);
      } else {
        $("input[name='orderStatus'][value=0]").prop("disabled", false);
        $("input[name='orderStatus'][value=1]").prop("disabled", false);
        $('#orderPrice input').prop("disabled", false);
        if ($('.rooms-active').find('.room-avails-btn').data('confirm-type') === 'confirm_auto') {
          $("input[name='storeStatus'][value=1]").prop("disabled", false);
          $("input[name='storeStatus'][value=2]").prop("disabled", true);
        } else {
          $("input[name='storeStatus'][value=2]").prop("disabled", false);
        }
        $('#stroeNumber input').prop("disabled", false);
        $("input[name='hasBreakfast'][value=1]").prop("disabled", false);
        $("input[name='hasBreakfast'][value=0]").prop("disabled", false);
        $('#setBtnSubmit').prop("disabled", false);
        $('#setBtnReset').prop("disabled", false);
        if (parseInt($('#batchSet').data('value')) === 1) {
          if ($(this).hasClass('calendar-order-select')) {
            $(this).removeClass('calendar-order-select');
          } else {
            $(this).addClass('calendar-order-select');
          }
          $("input[name='orderStatus'][value=0]").prop("checked", false);
          $("input[name='orderStatus'][value=1]").prop("checked", false);
          $('#orderPrice input').val('');
          $("input[name='storeStatus'][value=1]").prop("checked", false);
          $("input[name='storeStatus'][value=2]").prop("checked", false);
          $('#stroeNumber input').val('');
          $("input[name='hasBreakfast'][value=1]").prop("checked", false);
          return $("input[name='hasBreakfast'][value=0]").prop("checked", false);
        } else {
          $(this).addClass('calendar-order-select').siblings('.calendar-order').removeClass('calendar-order-select');
          $(this).parents('tr').siblings('tr').find('.calendar-order').removeClass('calendar-order-select');
          if ($(this).hasClass('calendar-no-data')) {
            $("input[name='orderStatus'][value=0]").prop("checked", false);
            $("input[name='orderStatus'][value=1]").prop("checked", false);
            $('#orderPrice input').val('');
            $("input[name='storeStatus'][value=1]").prop("checked", false);
            $("input[name='storeStatus'][value=2]").prop("checked", false);
            $('#stroeNumber input').val('');
            $("input[name='hasBreakfast'][value=1]").prop("checked", false);
            return $("input[name='hasBreakfast'][value=0]").prop("checked", false);
          } else {
            orderStatus = $(this).data('order-status');
            storeStatus = $(this).data('store-status');
            orderNumber = $(this).data('order-number');
            storeNumber = $(this).data('store-number');
            breakfast = $(this).data('breakfast');
            supplierPrice = $(this).data('supplier-price');
            if (orderStatus === 'status_available') {
              $("input[name='orderStatus'][value=1]").prop("checked", true);
            } else {
              $("input[name='orderStatus'][value=0]").prop("checked", true);
            }
            $('#orderPrice input').val(supplierPrice);
            if (storeStatus === 'inventory_immediate') {
              $("input[name='storeStatus'][value=1]").prop("checked", true);
              $('#stroeNumber').parents('.form-group').show();
            } else {
              $("input[name='storeStatus'][value=2]").prop("checked", true);
              $('#stroeNumber').parents('.form-group').hide();
            }
            $('#stroeNumber input').val(storeNumber);
            if (breakfast) {
              return $("input[name='hasBreakfast'][value=1]").prop("checked", true);
            } else {
              return $("input[name='hasBreakfast'][value=0]").prop("checked", true);
            }
          }
        }
      }
    });
    return $('.calendar-wrapper').on('click', '#storeStatus input', function(e) {
      var storeStatusVal;
      storeStatusVal = parseInt($(this).val());
      if (storeStatusVal === 1) {
        return $('#stroeNumber').parents('.form-group').show();
      } else if (storeStatusVal === 2) {
        return $('#stroeNumber').parents('.form-group').hide();
      }
    });
  };

  CalendarOperation._setBtnSubmit = function() {
    return $('.calendar-wrapper').on('click', '#setBtnSubmit', function(e) {
      var dateArr, dateObj, hasBreakfastVal, month, orderPriceVal, orderStatusVal, storeStatusVal, stroeNumberVal, url, year;
      year = $('#calendarYear').text();
      month = $('#currentMonth').text();
      dateArr = [];
      $('#calendarContainer .calendar-order-select').each(function() {
        var date, day;
        day = $(this).find('.calendar-day').text();
        if (day < 10) {
          day = '0' + day;
        }
        date = year + '-' + month + '-' + day;
        return dateArr.push(date);
      });
      if (dateArr.length < 1) {
        MOW.alert('warning', '请先选择要修改的日期');
        return false;
      }
      orderStatusVal = $("input[name='orderStatus']:checked").val();
      orderPriceVal = $.trim($('#orderPrice input').val());
      storeStatusVal = $("input[name='storeStatus']:checked").val();
      stroeNumberVal = $.trim($('#stroeNumber input').val());
      hasBreakfastVal = $("input[name='hasBreakfast']:checked").val();
      if (!orderStatusVal) {
        $('#orderStatus').siblings('.control-label').addClass('error');
        return false;
      } else {
        $('#orderStatus').siblings('.control-label').removeClass('error');
      }
      if (orderPriceVal.length < 1) {
        $('#orderPrice').siblings('.control-label').addClass('error');
        return false;
      } else {
        $('#orderPrice').siblings('.control-label').removeClass('error');
      }
      if (!storeStatusVal) {
        $('#storeStatus').siblings('.control-label').addClass('error');
        return false;
      } else {
        $('#storeStatus').siblings('.control-label').removeClass('error');
      }
      if (stroeNumberVal.length < 1 && $('#stroeNumber').parents('.form-group').css('display') === 'block') {
        $('#stroeNumber').siblings('.control-label').addClass('error');
        return false;
      } else {
        $('#stroeNumber').siblings('.control-label').removeClass('error');
      }
      if (!hasBreakfastVal) {
        $('#hasBreakfast').siblings('.control-label').addClass('error');
        return false;
      } else {
        $('#hasBreakfast').siblings('.control-label').removeClass('error');
      }
      dateObj = {
        status: orderStatusVal,
        supplier_price: orderPriceVal,
        inventory_type: storeStatusVal,
        total_inventory: stroeNumberVal,
        has_breakfast: hasBreakfastVal
      };
      url = $('.rooms-active').find('.room-avails-btn').data('url');
      return $.ajax(url, {
        type: 'post',
        dataType: 'json',
        data: {
          dates: dateArr,
          availibility: dateObj
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log(errorThrown);
          return MOW.alert('error', '保存失败!');
        },
        success: function(data, textStatus, jqXHR) {
          var updateRender, updateTemplate;
          CalendarOperation._dataInject(JSON.parse(data.datas));
          if (dateArr.length < 2) {
            if (data.error_avails.length > 0 && data.update_avails.length < 1) {
              MOW.alert('error', data.error_avails[0].errors);
            }
            if (data.error_avails.length < 1 && data.update_avails.length > 0) {
              MOW.alert('success', '保存成功');
            }
          } else {
            updateTemplate = $('#updateCalendarContent').html();
            Mustache.parse(updateTemplate);
            updateRender = Mustache.render(updateTemplate, {
              update_avails: data.update_avails,
              error_avails: data.error_avails
            });
            $('#updateCalendar').html(updateRender);
            $('#updateCalendar').modal('show');
          }
          if (data.error_avails.length > 0) {
            return $.each(data.error_avails, function(index, val) {
              return $('#' + val.day).addClass('calendar-order-select');
            });
          } else {
            return $('#setBtnReset').trigger('click');
          }
        }
      });
    });
  };

  CalendarOperation._formReset = function() {
    return $('.calendar-wrapper').on('click', '#setBtnReset', function(e) {
      return $('.calendar-form-content .form-group').each(function() {
        return $(this).children('.control-label').removeClass('error');
      });
    });
  };

  return CalendarOperation;

})();